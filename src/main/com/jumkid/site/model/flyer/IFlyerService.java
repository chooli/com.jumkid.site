package com.jumkid.site.model.flyer;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface IFlyerService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public Flyer transformRequestToFlyer(HttpServletRequest request) throws Exception;
    
}
