package com.jumkid.site.model.file;

import java.util.Date;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.base.model.CommonBean;

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
 * 3.0        Dec2013      chooli      creation
 * 
 *
 */

public class MediaFile extends CommonBean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7674116356631138754L;

	@Field
	protected String uuid;
		
	@Field
	protected String filename;
	
	@Field("mime_type")
	protected String mimeType;
	
	@Field
	protected Long size;
	
	@Field
	protected String site;
	
	@Field
	protected String module;
		
	@Field("created_on")
	protected Date createdDate;
	
	@Field("created_by")
	protected String createdBy;
	
	@Field
	protected String title;
	
	@Field
	protected String content;
	
	@Field("logical_path")
	protected String logicalPath;
	
	@Field
	protected Boolean activated = false;
	
	@Field("share_users")
	protected String[] shareUsers;
	
	
	public MediaFile(){
		//void
	}
	
	public MediaFile(String uuid){
		this.uuid = uuid;
	}
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getMimeType() {
		return mimeType;
	}

	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getLogicalPath() {
		return logicalPath;
	}

	public void setLogicalPath(String logicalPath) {
		this.logicalPath = logicalPath;
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}
	
	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	@Override
	public String getCreatedBy() {
		return this.createdBy;
	}

	@Override
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String[] getShareUsers() {
		return shareUsers;
	}

	public void setShareUsers(String[] shareUsers) {
		this.shareUsers = shareUsers;
	}

}
