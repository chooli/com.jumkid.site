package com.jumkid.site.model.social;

import java.util.Date;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.base.model.CommonBean;

public class SocialComment extends CommonBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8030196703115507727L;
	
	@Field
	public String uuid;
		
	@Field("social_channel")
	private String socialChannel;
	
	@Field("social_user_id")
	private String socialUserId;
	
	@Field("social_user_pic")
	private String socialUserPic;
	
	@Field("social_user_email")
	private String socialUserEmail;
	
	@Field
	private String site;
	
	@Field
	private String module;
	
	@Field("module_ref_id")
	private String moduleRefId;
		
	@Field("created_on")
	private Date createdDate;
	
	@Field
	private String content;
	
	@Field
	private Boolean activated;
	
	public SocialComment(){
		//void
	}
	
	public SocialComment(String uuid){
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getSocialChannel() {
		return socialChannel;
	}

	public void setSocialChannel(String socialChannel) {
		this.socialChannel = socialChannel;
	}

	public String getSocialUserId() {
		return socialUserId;
	}

	public void setSocialUserId(String socialUserId) {
		this.socialUserId = socialUserId;
	}

	public String getSocialUserPic() {
		return socialUserPic;
	}

	public void setSocialUserPic(String socialUserPic) {
		this.socialUserPic = socialUserPic;
	}

	public String getSocialUserEmail() {
		return socialUserEmail;
	}

	public void setSocialUserEmail(String socialUserEmail) {
		this.socialUserEmail = socialUserEmail;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public String getModuleRefId() {
		return moduleRefId;
	}

	public void setModuleRefId(String moduleRefId) {
		this.moduleRefId = moduleRefId;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

}
