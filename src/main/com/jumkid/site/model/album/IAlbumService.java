package com.jumkid.site.model.album;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.model.Command;
import com.jumkid.site.exception.MediaStoreServiceException;

public interface IAlbumService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws MediaStoreServiceException;

    public Album transformRequestToAlbum(HttpServletRequest request) throws Exception;
    
}
