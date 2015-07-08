package com.jumkid.site.model.file;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

/* 
 * This software is written by SocialStudio and subject
 * to a contract between SocialStudio and its customer.
 *
 * This software stays property of SocialStudio unless differing
 * arrangements between SocialStudio and its customer apply.
 *
 *
 * (c)2013 SocialStudio All rights reserved.
 *
 * VERSION   | DATE      | DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 1.0        Dec2013      chooli      creation
 * 
 *
 */

public interface IMediaFileService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;
    
    public MediaFile transformRequestToMediaFile(HttpServletRequest request)
			throws Exception;
    
}
