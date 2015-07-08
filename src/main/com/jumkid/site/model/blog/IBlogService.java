package com.jumkid.site.model.blog;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface IBlogService {
	
	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public Blog transformRequestToBlog(HttpServletRequest request) throws Exception;
    
}
