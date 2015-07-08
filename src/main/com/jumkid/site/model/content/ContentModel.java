package com.jumkid.site.model.content;

import com.jumkid.base.model.CommonBean;

public class ContentModel extends CommonBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1754773759001171908L;
	
	private String name;
	
	private String type;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
