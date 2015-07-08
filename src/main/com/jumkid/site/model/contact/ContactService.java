package com.jumkid.site.model.contact;

import java.nio.channels.FileChannel;
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
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.FormValidatoinException;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;
import com.jumkid.site.model.contact.Contact;

public class ContactService extends AbstractSiteService<Contact>  implements IContactService {
	
	private final static String MODULE_NAME = "contact";
	
	private IAbstractBeanValidator abstractBeanValidator;
			
	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		try{
			super.execute(cmd);
			        	
        	if (isManager("contactManager")) {
                if (isAction("save")) {                             	
                	//fill in necessary fields
                	Contact contact = (Contact)cmd.getParams().get("contact");
                	if (contact.getUuid()==null ||  contact.getUuid().isEmpty()) {
                		contact.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		contact.setModule(MODULE_NAME);
                		contact.setCreatedDate(new Date());
                		contact.setSite(this.site);
                		contact.setMimeType("application/json");
                	}
                	
                	contact.setFilename(contact.getFirstname()+" "+contact.getLastname());
                	                	                	
                	//index for search
                	if(contact!=null){
                		if( (contact=(Contact)fileSearchRepository.saveSearch(contact))==null )
                			cmd.setError("Failed to index contact entry");
                	}
                	
                	cmd.getResults().put("contact", contact);
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	Page<Contact> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE_NAME, pager, scope, Contact.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE_NAME, pager, scope, Contact.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String filename = (String)cmd.getParams().get("filename");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Contact contact = null;
            		if(uuid!=null){
            			contact = fileSearchRepository.findById(uuid, this.site, scope, Contact.class);
            		}else
        			if(filename!=null){
        				contact = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Contact.class);
        			}
            		
            		cmd.getResults().put("contact", contact);
            	}else
        		if (isAction("retrieve")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	String filename = (String)cmd.getParams().get("filename");
                	String scope = (String)cmd.getParams().get("scope");
                	                	
                	Contact contact = null;
                	if(uuid!=null){
                		contact = fileSearchRepository.findById(uuid, this.site, scope, Contact.class);                			
                	}else
                	if(filename!=null){
                		contact = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Contact.class);  
                	}
                	if(contact!=null){
                		FileChannel fc = fileStorageRepository.getFile(contact);
                		
                    	cmd.getResults().put("fileChannel", fc);
                		cmd.getResults().put("contact", contact);
            		}else{
            			cmd.setError("Failed to retrieve file information");
        			}
                	
                }else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
        			String scope = (String)cmd.getParams().get("scope");
        			
        			try{
        				Contact contact = fileSearchRepository.findById(uuid, this.site, scope, Contact.class);
        				if(contact!=null){
        					fileSearchRepository.remove(uuid, this.site, Contact.class);
        				}
        			}catch(Exception e){
        				cmd.setError("Failed to delete file "+e.getMessage());
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
	public Contact transformRequestToContact(HttpServletRequest request)
			throws FormValidatoinException {
		
		String uuid = request.getParameter("uuid");
		Contact contact;
		
		try{
			String scope = request.getParameter("scope");
			
			if (uuid!=null && !uuid.isEmpty()) {
				contact = (Contact)fileSearchRepository.findById(uuid, this.site, scope, Contact.class);
	        	
	        } else {
	        	contact = new Contact();
	        	contact.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        	contact.setCreatedBy(ServiceSession.getUsername(request));
	        }    
			
			//parse request by fields
			contact = (Contact)this.fillInValueByRequest(contact, request);
	        
			contact = (Contact)this.fillInConcurrencyInfo(contact, request);   
			
			//bean validation
	        abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "firstname & lastname & comment", contact)
			 					 .validate(IAbstractBeanValidator.VTYPE_EMPTY, "email | phone", contact);

		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return contact;
	}

	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}

	public void setAbstractBeanValidator(IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}

}
