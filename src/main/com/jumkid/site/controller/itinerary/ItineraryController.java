package com.jumkid.site.controller.itinerary;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.itinerary.Itinerary;
import com.jumkid.site.model.itinerary.IItineraryService;

@Controller
@Scope("session")
public class ItineraryController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IItineraryService itineraryService;
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/itinerary/load", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", request.getParameter("uuid"));
		params.put("uuids", request.getParameterValues("uuids[]"));
		
		try {
			Command cmd = itineraryService.execute( new Command("itineraryManager", "load", params) );
			
			if(cmd.getResults().get("itinerary")!=null)
				return sSession.wrapCommand(cmd, "itinerary", false).getJsonResult();
			if(cmd.getResults().get("itineraries")!=null)
				return sSession.wrapCommand(cmd, "itineraries", true).getJsonResult();
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/itinerary/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
				        
        try{            
            Itinerary itinerary = itineraryService.transformRequestToItinerary(request);
        	params.put("itinerary", itinerary);
        	
        	Command cmd = itineraryService.execute( new Command("itineraryManager", "save", params) );
        	
            return sSession.wrapCommand(cmd, "itinerary", false).getJsonResult();
            
        } catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/itinerary/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String remove(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
				        
        try{
        	Command cmd = itineraryService.execute(new Command("itineraryManager", "delete", params));
        	
        	return sSession.wrapCommand(cmd).getJsonResult();
        	
        }catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
	}

	public IItineraryService getItineraryService() {
		return itineraryService;
	}

	public void setItineraryService(IItineraryService itineraryService) {
		this.itineraryService = itineraryService;
	}
}
