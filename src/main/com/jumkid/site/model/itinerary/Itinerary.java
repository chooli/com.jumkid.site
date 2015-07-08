package com.jumkid.site.model.itinerary;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;

public class Itinerary extends MediaFile {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6998550145326333471L;
	
	@Field("attribute_type_ss")
	private String[] attributeTypes;
	
	@Field("attribute_value_ss")
	private String[] attributeValues;
	
	@Field("attribute_time_ss")
	private String[] attributeTimes;

	public String[] getAttributeTypes() {
		return attributeTypes;
	}

	public void setAttributeTypes(String[] attributeTypes) {
		this.attributeTypes = attributeTypes;
	}

	public String[] getAttributeValues() {
		return attributeValues;
	}

	public void setAttributeValues(String[] attributeValues) {
		this.attributeValues = attributeValues;
	}

	public String[] getAttributeTimes() {
		return attributeTimes;
	}

	public void setAttributeTimes(String[] attributeTimes) {
		this.attributeTimes = attributeTimes;
	} 

	
}
