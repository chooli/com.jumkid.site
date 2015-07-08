package com.jumkid.site.model.file;

import com.jumkid.base.model.CommonBean;

public class LabelCount extends CommonBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4575873830474106714L;

	public LabelCount(String value, long count){
		this.value = value;
		this.count = count;
	}
	
	String value;
	Long count;
	
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public Long getCount() {
		return count;
	}
	public void setCount(long count) {
		this.count = count;
	}
	
	
	
}
