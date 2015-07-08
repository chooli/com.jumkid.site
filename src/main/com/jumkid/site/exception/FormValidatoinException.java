package com.jumkid.site.exception;

public class FormValidatoinException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 354255430588857904L;
	
	private String validationMessage;

	public FormValidatoinException(String errorMsg){
		super(errorMsg);
	}
	
	public FormValidatoinException(String errorMsg, Throwable e){
		super(errorMsg, e);
	}

	public String getValidationMessage() {
		return validationMessage;
	}

	public void setValidationMessage(String validationMessage) {
		this.validationMessage = validationMessage;
	}
	
}
