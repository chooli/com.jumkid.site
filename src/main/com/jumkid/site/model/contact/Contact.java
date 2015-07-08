package com.jumkid.site.model.contact;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;

public class Contact extends MediaFile{

	/**
	 * 
	 */
	private static final long serialVersionUID = -689256185063604206L;
	
	@Field("firstname_s")
	private String firstname;
	
	@Field("lastname_s")
    private String lastname;
    
	@Field("email_s")
    private String email;
	
	@Field("phone_s")
	private String phone;
	
	@Field("comment_t")
	private String comment;

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
    

	
}
