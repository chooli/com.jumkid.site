package com.jumkid.site.model.section;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.jumkid.base.model.CommonBean;

@Entity
@Table(name="section")
public class Section extends CommonBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2236628100899886368L;
	
	@Column (name = "title")
	private String title;
	
	private Integer position;
	
	private String url;
	
	private Boolean activated;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getPosition() {
		return position;
	}

	public void setPosition(Integer position) {
		this.position = position;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}
	

}
