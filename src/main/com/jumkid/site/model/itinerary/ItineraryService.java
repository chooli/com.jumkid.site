package com.jumkid.site.model.itinerary;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Scope;
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
import com.jumkid.site.model.file.MediaFile;

@Scope("session")
public class ItineraryService extends AbstractSiteService<Itinerary> implements IItineraryService {
	
	private final static String MODULE = "itinerary";

	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		try {
			super.execute(cmd);

			if (isManager("itineraryManager")) {
                if (isAction("save")) {
                	//fill in necessary fields
                	Itinerary itinerary = (Itinerary)cmd.getParams().get("itinerary");
                	if (itinerary.getUuid()==null ||  itinerary.getUuid().isEmpty()) {
                		itinerary.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		itinerary.setModule(MODULE);
                		itinerary.setCreatedDate(new Date());
                		itinerary.setSite(this.site);
                	}
                	
                	if(itinerary.getTitle()==null || itinerary.getTitle().isEmpty()){
                		itinerary.setTitle(Formatter.dateToString(itinerary.getCreatedDate(), Formatter.yyyy_MM_dd));
                	}
                	itinerary.setFilename(itinerary.getTitle().replaceAll("\\s", "-"));
                	                	
                	fileSearchRepository.saveSearch(itinerary);
                	
                	cmd.getResults().put("itinerary", itinerary);
                	
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	String scope = (String)cmd.getParams().get("scope");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	
                	Page<Itinerary> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE, pager, scope, Itinerary.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE, pager, scope, Itinerary.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String[] uuids = (String[])cmd.getParams().get("uuids");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Itinerary itinerary = null;
            		if(uuid!=null){
            			itinerary = fileSearchRepository.findById(uuid, this.site, scope, Itinerary.class);
            			
            			cmd.getResults().put("itinerary", itinerary);
            		}else
        			if(uuids!=null){
        				Vector<Itinerary> itineraries = new Vector<Itinerary>();
        				for(String _uuid : uuids){
        					itinerary = fileSearchRepository.findById(_uuid, this.site, scope, Itinerary.class);
        					itineraries.add(itinerary);
        				}
        				
        				cmd.getResults().put("itineraries", itineraries);
        			}
            		            		
            	}else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
                	
        			try{
        				
        				this.deleteMediaFile(uuid, MediaFile.class);	    				
        				
        			}catch(Exception e){
        				cmd.setError("Failed to delete itinerary "+e.getMessage());
        			}
        			                	
        		}
                
        	}

		} catch (Exception e) {
			logger.error("failed to perform " + cmd.getAction() + " in "
					+ cmd.getManager() + " due to " + e.getMessage());
			cmd.setError(e.getLocalizedMessage());
		}

		return cmd;
	}

	@Override
	public Itinerary transformRequestToItinerary(HttpServletRequest request)
			throws Exception {
		String uuid = request.getParameter("uuid");
		String scope = request.getParameter("scope");
		Itinerary entity = null;
		
		try {
					
			if (uuid!=null && !uuid.isEmpty()) {
				entity = fileSearchRepository.findById(uuid, this.site, scope, Itinerary.class);
	        	
	        } else {
	        	entity = new Itinerary();
	        	entity.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        }    
			
			//parse request by fields
			entity = (Itinerary)this.fillInValueByRequest(entity, request);
	        
			entity = (Itinerary)this.fillInConcurrencyInfo(entity, request);   
				
			//bean validation
	        getAbstractBeanValidator().validate(IAbstractBeanValidator.VTYPE_EMPTY, "title", entity);
	        
		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return entity;
	}

}
