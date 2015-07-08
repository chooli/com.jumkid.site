package com.jumkid.site.model.social;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface ISocialCommentService {
	
	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public SocialComment transformRequestToSocialComment(HttpServletRequest request) throws Exception;

}
