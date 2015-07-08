package com.jumkid.site.model.trip;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.ArrayUtils;
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
import com.jumkid.site.model.itinerary.IItineraryService;
import com.jumkid.site.model.itinerary.Itinerary;

@Scope("session")
public class TripService extends AbstractSiteService<Trip> implements ITripService {
	
	private final static String MODULE_NAME = "trip";
	
	private IItineraryService itineraryService;
	
	private ITripRepository tripRepository;
	
	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		try{
			super.execute(cmd);
			
        	if (isManager("tripManager")) {
                if (isAction("save")) {
                	//fill in necessary fields
                	Trip trip = (Trip)cmd.getParams().get("trip");
                	if (trip.getUuid()==null ||  trip.getUuid().isEmpty()) {
                		trip.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		trip.setModule(MODULE_NAME);
                		trip.setCreatedDate(new Date());
                		trip.setSite(this.site);
                	}
                	
                	if(trip.getTitle()==null || trip.getTitle().isEmpty()){
                		trip.setTitle(Formatter.dateToString(trip.getCreatedDate(), Formatter.yyyy_MM_dd));
                	}
                	trip.setFilename(trip.getTitle().replaceAll("\\s", "-"));
                	                	
                	tripRepository.saveSearch(trip);
                	
                	cmd.getResults().put("trip", trip);
                	
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	Page<Trip> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = tripRepository.findByText(keyword, this.site, MODULE_NAME, pager, scope, Trip.class);
                		
                	}else{
            			page = tripRepository.findBySite(this.site, MODULE_NAME, pager, scope, Trip.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String filename = (String)cmd.getParams().get("filename");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Trip trip = null;
            		if(uuid!=null){
            			trip = tripRepository.findById(uuid, this.site, scope, Trip.class);
            		}else
        			if(filename!=null){
        				trip = tripRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Trip.class);
        			}
            		
            		cmd.getResults().put("trip", trip);
            		
            	}else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
        			
        			try{
        				//Trip trip = (Trip)tripRepository.findById(uuid, this.site, scope, Trip.class);
        				
        				tripRepository.remove(uuid, this.site, Trip.class);
        				        				
        			}catch(Exception e){
        				cmd.setError("Failed to delete entity "+e.getMessage());
        			}
        			                	
        		}else
    			if(isAction("recent")){
    				String scope = (String)cmd.getParams().get("scope");
    				Integer numOfDays = (Integer)cmd.getParams().get("numOfDays");
    				Integer limit = (Integer)cmd.getParams().get("limit");
    				Integer start = (Integer)cmd.getParams().get("start");
                	
                	Page<Trip> page = null;
                	Pageable pager =new PageRequest(start, limit); 
    				
                	page = tripRepository.findSinceToday(numOfDays, pager, scope, null);
                	
                	cmd.getResults().put("page", page);
    			}
        	}
        	
		}catch (Exception e) {
        	logger.error("failed to perform "+cmd.getAction()+" in "+cmd.getManager()+" due to "+e.getMessage());
            cmd.setError(e.getLocalizedMessage());
        }
        
        return cmd;
	}

	@Override
	public Trip transformRequestToTrip(HttpServletRequest request)
			throws Exception {
		String uuid = request.getParameter("uuid");
		String scope = request.getParameter("scope");
		Trip entity = null;
		
		try {
					
			if (uuid!=null && !uuid.isEmpty()) {
				entity = tripRepository.findById(uuid, this.site, scope, Trip.class);
	        	
	        } else {
	        	entity = new Trip();
	        	entity.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        }    
			
			//parse request by fields
			entity = (Trip)this.fillInValueByRequest(entity, request);
	        
			entity = (Trip)this.fillInConcurrencyInfo(entity, request);   
				
			//bean validation
	        abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "title", entity);
	        
	        countDuration(entity);

		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return entity;
	}
	
	private void countDuration(Trip trip){
		Date departureDate = trip.getDepartureDate();
		Date returnDate = trip.getReturnDate();
		long diff = returnDate.getTime() - departureDate.getTime();
		trip.setDuration((int)TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS) + 1);
		
		//generate itinerary according the duration days
		Integer duration = trip.getDuration();
		String[] itineraries = trip.getRefItineraries();
		if(itineraries==null || itineraries.length==0){
			itineraries = new String[duration];
		}else
		if(duration > itineraries.length){
			itineraries = (String[])ArrayUtils.addAll(itineraries, new String[duration-itineraries.length]);
		}else
		if(duration < itineraries.length){
			itineraries = (String[])ArrayUtils.subarray(itineraries, 0, duration);
		}
		
		for(int i=0;i<duration;i++){
			if(itineraries[i]==null){
				Itinerary itinerary = new Itinerary();
				itinerary.setTitle(String.valueOf(i+1));
				//by default itinerary is activated
				itinerary.setActivated(true);
				HashMap<String, Object> params = new HashMap<String, Object>();
				params.put("itinerary", itinerary);
				
				Command cmd = itineraryService.execute(new Command("itineraryManager", "save", params));
				itinerary = (Itinerary)cmd.getResults().get("itinerary");
				itineraries[i] = itinerary.getUuid();	
			}
		}
		trip.setDuration(duration);
		trip.setRefItineraries(itineraries);
	}

	public IItineraryService getItineraryService() {
		return itineraryService;
	}

	public void setItineraryService(IItineraryService itineraryService) {
		this.itineraryService = itineraryService;
	}

	public ITripRepository getTripRepository() {
		return tripRepository;
	}

	public void setTripRepository(ITripRepository tripRepository) {
		this.tripRepository = tripRepository;
	}

}
