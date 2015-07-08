package com.jumkid.site.model.flyer;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.jumkid.base.exception.BeanValidateException;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.IAbstractBeanValidator;
import com.jumkid.base.util.Formatter;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.FormValidatoinException;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;

public class FlyerService extends AbstractSiteService<Flyer> implements IFlyerService {
	
	private final static String MODULE_NAME = "flyer";
	
	private IAbstractBeanValidator abstractBeanValidator;

	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		try{
			super.execute(cmd);
			        	
        	if (isManager("flyerManager")) {
                if (isAction("save")) {
                	//fill in necessary fields
                	Flyer flyer = (Flyer)cmd.getParams().get("flyer");
                	if (flyer.getUuid()==null ||  flyer.getUuid().isEmpty()) {
                		flyer.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		flyer.setModule(MODULE_NAME);
                		flyer.setCreatedDate(new Date());
                		flyer.setSite(this.site);
                	}
                	
                	if(flyer.getTitle()==null || flyer.getTitle().isEmpty()){
                		flyer.setTitle(Formatter.dateToString(flyer.getCreatedDate(), Formatter.yyyy_MM_dd));
                	}
                	flyer.setFilename(flyer.getTitle().replaceAll("\\s", "-"));
                	                	
                	fileSearchRepository.saveSearch(flyer);
                	
                	cmd.getResults().put("flyer", flyer);
                	
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	Page<Flyer> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE_NAME, pager, scope, Flyer.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE_NAME, pager, scope, Flyer.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String filename = (String)cmd.getParams().get("filename");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Flyer flyer = null;
            		if(uuid!=null){
            			flyer = fileSearchRepository.findById(uuid, this.site, scope, Flyer.class);
            		}else
        			if(filename!=null){
        				flyer = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Flyer.class);
        			}
            		
            		cmd.getResults().put("flyer", flyer);
            		
            	}else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
        			String scope = (String)cmd.getParams().get("scope");
        			
        			try{
        				Flyer flyer = (Flyer)fileSearchRepository.findById(uuid, this.site, scope, Flyer.class);
        				String[] refProducts = flyer.getRefProducts();
        				
        				fileSearchRepository.remove(uuid, this.site, Flyer.class);
        				
        				if(refProducts!=null){
        					for(String refProduct : refProducts){
        						Flyer _product = fileSearchRepository.findById(refProduct, this.site, scope, Flyer.class);
        						if(_product!=null){
        							fileSearchRepository.remove(_product);
        							fileStorageRepository.deleteFile(_product);
        						}
        					}
        				}    					    				
        				
        			}catch(Exception e){
        				cmd.setError("Failed to delete entity "+e.getMessage());
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
	public Flyer transformRequestToFlyer(HttpServletRequest request)
			throws Exception {
		String uuid = request.getParameter("uuid");
		Flyer entity = null;
		
		try {
			String scope = request.getParameter("scope");
			
			if (uuid!=null && !uuid.isEmpty()) {
				entity = fileSearchRepository.findById(uuid, this.site, scope, Flyer.class);
	        	
	        } else {
	        	entity = new Flyer();
	        	entity.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        }    
			
			//parse request by fields
			entity = (Flyer)this.fillInValueByRequest(entity, request);
	        
			entity = (Flyer)this.fillInConcurrencyInfo(entity, request);   
				
			//bean validation
	        abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "title", entity);

		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return entity;
	}

	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}

	public void setAbstractBeanValidator(IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}

}
