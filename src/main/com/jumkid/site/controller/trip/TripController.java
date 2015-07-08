package com.jumkid.site.controller.trip;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.mobile.device.Device;
import org.springframework.mobile.device.DeviceUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.mail.IMailService;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.util.CommonUtil;
import com.jumkid.site.model.itinerary.IItineraryService;
import com.jumkid.site.model.itinerary.Itinerary;
import com.jumkid.site.model.trip.Trip;
import com.jumkid.site.model.trip.ITripService;

@Controller
@Scope("session")
public class TripController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private ITripService tripService;
	
	private IItineraryService itineraryService;
	
	private IMailService mailService;
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/trip/print/{uuid}", method=RequestMethod.GET)
	public String print(@PathVariable("uuid") String uuid, HttpServletRequest request){
				
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
			Command cmd = tripService.execute( new Command("tripManager", "load", params) );
			Trip trip = (Trip)cmd.getResults().get("trip");
			request.setAttribute("trip", trip);
			
			params.remove("uuid");
			params.put("uuids", trip.getRefItineraries());
			cmd = itineraryService.execute( new Command("itineraryManager", "load", params) );
			request.setAttribute("itineraries", cmd.getResults().get("itineraries"));
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		request.setAttribute("entityId", uuid);
		request.setAttribute("module", "trip");
		
		Device currentDevice = DeviceUtils.getCurrentDevice(request);
		
		if(currentDevice.isMobile())
			return "mobile/print";
		else
			return "user/print";
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/trip/recent", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String recent(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);		
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		String _start = request.getParameter("start");
		Integer start = _start!=null ? Integer.parseInt(_start):0;
		String _limit = request.getParameter("limit");
		Integer limit = _limit!=null ? Integer.parseInt(_limit):20;
		String _numOfDays = request.getParameter("numOfDays");
		Integer numOfDays = _numOfDays!=null ? Integer.parseInt(_numOfDays):30;
		params.put("start", start);
		params.put("limit", limit);
		params.put("numOfDays", numOfDays);
		
		try {
			Command cmd = tripService.execute( new Command("tripManager", "recent", params) );
			Page<Trip> page = (Page<Trip>)cmd.getResults().get("page");
			cmd.addResults("trips", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "trips", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/trip/share/{uuid}", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String share(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try{
			Command cmd = tripService.execute( new Command("tripManager", "load", params) );
			Trip trip = (Trip)cmd.getResults().get("trip");
			trip = this.setShareUsers(trip, request.getParameter("receivers"));
			
			//save trip 
			params.put("trip", trip);      	
        	cmd = tripService.execute( new Command("tripManager", "save", params) );      	
			
        	//send mail to users
			params.put("msg", request.getParameter("mailMsg"));
			params.put("to", request.getParameter("receivers"));
			params.put("subject", "Trip planner for "+trip.getTitle());
			params.put("tempalteName", "email-trip-itinerary-zh-CN.vm");
			
			cmd = mailService.execute(new Command("mailManager", "send", params));
			
			sSession.setSuccess(true);
			
		}catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/trip/load/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
			Command cmd = tripService.execute( new Command("tripManager", "load", params) );
						
			return sSession.wrapCommand(cmd, "trip", false).getJsonResult();
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/trip/search", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String search(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		String keyword = request.getParameter("keyword");
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		String _start = request.getParameter("start");
		Integer start = _start!=null ? Integer.parseInt(_start):0;
		String _limit = request.getParameter("limit");
		Integer limit = _limit!=null ? Integer.parseInt(_limit):20;
		params.put("keyword", keyword);
		params.put("start", start);
		params.put("limit", limit);
		
		try {
			Command cmd = tripService.execute( new Command("tripManager", "search", params) );
			Page<Trip> page = (Page<Trip>)cmd.getResults().get("page");
			cmd.addResults("trips", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "trips", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/trip/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
				        
        try{            
            Trip trip = tripService.transformRequestToTrip(request);
        	params.put("trip", trip);
        	
        	Command cmd = tripService.execute( new Command("tripManager", "save", params) );
        	
            return sSession.wrapCommand(cmd, "trip", false).getJsonResult();
            
        } catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/trip/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String remove(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
				        
        try{
        	Command cmd = tripService.execute(new Command("tripManager", "delete", params));
        	
        	return sSession.wrapCommand(cmd).getJsonResult();
        	
        }catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
	}
	
	@SuppressWarnings("unchecked")
	private Trip setShareUsers(Trip trip, String receivers){
		StringTokenizer addressTokens = new StringTokenizer(receivers, ";");
		ArrayList<String> userLst = new ArrayList<String>();
		String[] existUser = trip.getShareUsers();
		while(addressTokens.hasMoreTokens()){
			   String token = addressTokens.nextToken();
			   String username = token.replaceAll("<\\S+>", "");
			   if(!username.trim().isEmpty()) userLst.add(username) ;
	    }
		String[] users = userLst.toArray(new String[userLst.size()]);
		trip.setShareUsers(CommonUtil.mergeStrings(existUser, users));
		
		//cascade the itinerary shared users
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuids", trip.getRefItineraries());
		Command cmd = itineraryService.execute(new Command("itineraryManager", "load", params));
		List<Itinerary> itineraries = (List<Itinerary>)cmd.getResults().get("itineraries");
		for (Itinerary itinerary:itineraries) {
			itinerary.setShareUsers(CommonUtil.mergeStrings(existUser, users));
			
			params.put("itinerary", itinerary);
			itineraryService.execute(new Command("itineraryManager", "save", params));
		}
		
		return trip;
	}

	public ITripService getTripService() {
		return tripService;
	}

	public void setTripService(ITripService tripService) {
		this.tripService = tripService;
	}

	public IItineraryService getItineraryService() {
		return itineraryService;
	}

	public void setItineraryService(IItineraryService itineraryService) {
		this.itineraryService = itineraryService;
	}

	public IMailService getMailService() {
		return mailService;
	}

	public void setMailService(IMailService mailService) {
		this.mailService = mailService;
	}

}
