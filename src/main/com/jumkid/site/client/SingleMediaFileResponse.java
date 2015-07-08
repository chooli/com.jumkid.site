package com.jumkid.site.client;

import com.jumkid.base.rest.GenericResponse;
/* 
 * This software is written by Jumkid and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 *
 * (c)2013 Jumkid All rights reserved.
 *
 * VERSION   | DATE      | DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 3.0        Apr2014      chooli      creation
 * 
 *
 */
import com.jumkid.site.model.file.MediaFile;

public class SingleMediaFileResponse extends GenericResponse{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5231694934236119371L;
	
	MediaFile mediafile;
	
	public MediaFile getMediafile() {
		return mediafile;
	}

	public void setMediafile(MediaFile mediafile) {
		this.mediafile = mediafile;
	}	
	
}
