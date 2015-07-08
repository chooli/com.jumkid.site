package com.jumkid.site.model.itinerary;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface IItineraryService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public Itinerary transformRequestToItinerary(HttpServletRequest request) throws Exception;
    
}
