package com.jumkid.site.model.contact;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface IContactService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public Contact transformRequestToContact(HttpServletRequest request) throws Exception;
    
}
