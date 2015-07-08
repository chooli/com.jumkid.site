package com.jumkid.site.exception;

public class MediaStoreServiceException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1341334446255902820L;
	
	public MediaStoreServiceException(String errorMsg){
		super(errorMsg);
	}
	
}
