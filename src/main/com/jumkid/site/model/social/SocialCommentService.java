package com.jumkid.site.model.social;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.jumkid.base.exception.BeanValidateException;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.IAbstractBeanValidator;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.FormValidatoinException;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;

public class SocialCommentService extends AbstractSiteService<SocialComment> implements ISocialCommentService{
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private ISocialCommentRepository socialCommentRepository;
	
	private IAbstractBeanValidator abstractBeanValidator;

	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		
		try{
			super.execute(cmd);
			        	
        	if (isManager("socialCommentManager")) {
                if (isAction("save")) {
                	SocialComment socialComment = (SocialComment)cmd.getParams().get("socialComment");
                	
                	synchronized(socialComment){
                		if(socialComment.getUuid()==null){
                    		socialComment.setUuid(UUIDGenerator.next());
                    	}
                		socialComment = socialCommentRepository.save(socialComment);
                	}
                	
                	cmd.getResults().put("socialComment", socialComment);
                	
                }else
            	if(isAction("load")){
            		String module = (String)cmd.getParams().get("module");
            		String moduleRefId = (String)cmd.getParams().get("moduleRefId");
            		
            		Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	
                	Page<SocialComment> page = null;
                	Pageable pager =new PageRequest(start, limit); 
            		
                	page = socialCommentRepository.findByModuleReference(module, moduleRefId, null, pager);
                	
                	cmd.getResults().put("page", page);
            	}else
        		if(isAction("delete")){
        			String uuid = (String)cmd.getParams().get("uuid");
                	
        			try{
        				if(uuid!=null){
        					socialCommentRepository.remove(uuid, this.site);
        				}
        			}catch(Exception e){
        				cmd.setError("Failed to delete social comment "+e.getMessage());
        			}
        		}
                
        	}
        	
		}catch (Exception e) {
        	logger.error("failed to perform "+cmd.getAction()+" in "+cmd.getManager()+" due to "+e.getMessage());
            cmd.setError(e.getLocalizedMessage());
        }
        
        return cmd;
	}

	@Override
	public SocialComment transformRequestToSocialComment(HttpServletRequest request) throws Exception {
		String uuid = request.getParameter("uuid");
		SocialComment socialComment;
		
		try {
			
			if (uuid!=null && !uuid.isEmpty()) {
				socialComment = (SocialComment)socialCommentRepository.findById(uuid, this.site);
				
				socialComment = (SocialComment)this.fillInValueByRequest(socialComment, request);
	        	
	        } else {
	        	socialComment = new SocialComment();
	        	
	        	socialComment = (SocialComment)this.fillInValueByRequest(socialComment, request);
	        	
	        	socialComment.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        	socialComment.setCreatedDate(new Date());
	        	socialComment.setSite(this.site);
	        	socialComment.setActivated(Boolean.TRUE);
	        }    
	        
			socialComment = (SocialComment)this.fillInConcurrencyInfo(socialComment, request);   
    				
			//bean validation
	        abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "content & module & moduleRefId", socialComment);

		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return socialComment;
	}

	public ISocialCommentRepository getSocialCommentRepository() {
		return socialCommentRepository;
	}

	public void setSocialCommentRepository(ISocialCommentRepository socialCommentRepository) {
		this.socialCommentRepository = socialCommentRepository;
	}

	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}

	public void setAbstractBeanValidator(
			IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}

}
