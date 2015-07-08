package com.jumkid.site.model.category;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.jumkid.base.model.CommonBean;

@Entity
@Table (name = "category")
public class Category extends CommonBean  {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8561527888605692900L;

	@Column (name = "name")
    private String name;
    
	@Column (name = "route")
    private String route;
	
	@Column (name = "description")
	private String description;
	
	@Column (name = "activated")
    private Boolean activated;
	
	@ManyToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="parent_id")
	private Category parent;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRoute() {
		return route;
	}

	public void setRoute(String route) {
		this.route = route;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

	public Category getParent() {
		return parent;
	}

	public void setParent(Category parent) {
		this.parent = parent;
	}
	
	
}
