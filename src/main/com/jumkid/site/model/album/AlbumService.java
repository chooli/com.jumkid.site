package com.jumkid.site.model.album;

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
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.util.Formatter;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.FormValidatoinException;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;
import com.jumkid.site.model.file.MediaFile;

public class AlbumService extends AbstractSiteService<Album>  implements IAlbumService {
		
	private final static String MODULE_NAME = "album";
	
	private IAbstractBeanValidator abstractBeanValidator;

	@Override
	public synchronized Command execute(Command cmd) throws MediaStoreServiceException {
		try{
			super.execute(cmd);
			        	
        	if (isManager("albumManager")) {
                if (isAction("save")) {
                	//fill in necessary fields
                	Album album = (Album)cmd.getParams().get("album");
                	if (album.getUuid()==null ||  album.getUuid().isEmpty()) {
                		album.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		album.setModule(MODULE_NAME);
                		album.setCreatedDate(new Date());
                		album.setSite(this.site);
                	}
                	
                	if(album.getTitle()==null || album.getTitle().isEmpty()){
                		album.setTitle(Formatter.dateToString(album.getCreatedDate(), Formatter.yyyy_MM_dd));
                	}
                	album.setFilename(album.getTitle().replaceAll("\\s", "-"));
                	                	
                	fileSearchRepository.saveSearch(album);
                	
                	cmd.getResults().put("album", album);
                	
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	String scope = (String)cmd.getParams().get("scope");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	
                	Page<Album> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE_NAME, pager, scope, Album.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE_NAME, pager, scope, Album.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String filename = (String)cmd.getParams().get("filename");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Album album = null;
            		if(uuid!=null){
            			album = fileSearchRepository.findById(uuid, this.site, scope, Album.class);
            		}else
        			if(filename!=null){
        				album = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Album.class);
        			}
            		
            		cmd.getResults().put("album", album);
            		
            	}else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
        			String scope = (String)cmd.getParams().get("scope");
                	
        			try{
        				Album album = (Album)fileSearchRepository.findById(uuid, this.site, scope, Album.class);
        				String[] attachments = album.getAttachments();
        				
        				fileSearchRepository.remove(uuid, this.site, Album.class);
        				
        				if(attachments!=null){
        					for(String attachment : attachments){
        						this.deleteMediaFile(attachment, MediaFile.class);
        					}
        				}    					    				
        				
        			}catch(Exception e){
        				cmd.setError("Failed to delete album "+e.getMessage());
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
	public Album transformRequestToAlbum(HttpServletRequest request)
			throws Exception {
		String uuid = request.getParameter("uuid");
		Album entity = null;
		
		try {
			String scope = request.getParameter("scope");
			
			if (uuid!=null && !uuid.isEmpty()) {
				entity = fileSearchRepository.findById(uuid, this.site, scope, Album.class);
	        	
	        } else {
	        	entity = new Album();
	        	entity.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        	entity.setCreatedBy(ServiceSession.getUsername(request));
	        }    
			
			//parse request by fields
			entity = (Album)this.fillInValueByRequest(entity, request);
	        
			entity = (Album)this.fillInConcurrencyInfo(entity, request);   
				
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

	public void setAbstractBeanValidator(
			IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}

	
}
