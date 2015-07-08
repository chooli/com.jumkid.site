package com.jumkid.site.controller.flight;

import java.util.HashMap;

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
import com.jumkid.live.flightaware.IPassengerFlightService;

/* 
 * This software is written by Jumkid Innovation. and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 * 
 * http://www.jumkid.com
 * mailto:info@jumkid.com
 *
 * (c)2014 Jumkid Innovation. All rights reserved.
 *
 */

@Controller
@Scope("session")
public class PassengerFlightController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IPassengerFlightService passengerFlightService;
	
	/**
	 * 
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value="/flight/inflight/{ident}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String inFlightInfo(@PathVariable("ident") String ident){
		ServiceSession sSession = new ServiceSession(false);
		
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("ident", ident);
			
			try{
				Command cmd = passengerFlightService.execute( new Command("flightmanager", "loadInFlightInfo", params) );
				
				return sSession.wrapCommand(cmd, "inFlightInfo", false).getJsonResult();
				
			}catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
			
			return sSession.toServiceJSONResult();
	}

	public IPassengerFlightService getPassengerFlightService() {
		return passengerFlightService;
	}

	public void setPassengerFlightService(IPassengerFlightService passengerFlightService) {
		this.passengerFlightService = passengerFlightService;
	}
	
}
