package com.jumkid.site.model.album;

import java.util.ArrayList;
import java.util.List;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;

public class Album extends MediaFile {

	/**
	 * 
	 */
	private static final long serialVersionUID = -682014820318694856L;
	
	@Field("featured_pic_s")
	private String featuredPic;
		
	@Field("style_s")
	private String style;
	
	@Field("template_s")
	private String template;

	@Field("attachment_ss")
	private String[] attachments;
	
	private List<MediaFile> attachmentFiles;

	public String getFeaturedPic() {
		return featuredPic;
	}

	public void setFeaturedPic(String featuredPic) {
		this.featuredPic = featuredPic;
	}

	public String[] getAttachments() {
		return attachments;
	}

	public void setAttachments(String[] attachments) {
		this.attachments = attachments;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	public List<MediaFile> getAttachmentFiles() {
		return attachmentFiles;
	}

	public void setAttachmentFiles(List<MediaFile> attachmentFiles) {
		this.attachmentFiles = attachmentFiles;
	} 

	public void addAttachmentFile(MediaFile mfile){
		if(this.attachmentFiles==null){
			this.attachmentFiles = new ArrayList<MediaFile>();
		}
		this.attachmentFiles.add(mfile);
	}
	
}
