package com.jumkid.site.client;
/* 
 * This software is written by Jumkid Ltd. and subject
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

import java.util.List;

import com.jumkid.base.rest.GenericResponse;
import com.jumkid.site.model.file.MediaFile;

public class MultiMediaFileResponse extends GenericResponse{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2355362701565579159L;

	List<MediaFile> mediafiles;

	public List<MediaFile> getMediafiles() {
		return mediafiles;
	}

	public void setMediafiles(List<MediaFile> mediafiles) {
		this.mediafiles = mediafiles;
	}
	
	
}
