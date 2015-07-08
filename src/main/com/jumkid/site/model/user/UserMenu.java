package com.jumkid.site.model.user;

import com.jumkid.base.model.CommonBean;

public class UserMenu extends CommonBean {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1950511633162356005L;
	
	private String module;
	
	private String route;

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public String getRoute() {
		return route;
	}

	public void setRoute(String route) {
		this.route = route;
	}
	
	

}
