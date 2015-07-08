package com.jumkid.site.model.blog;

import java.util.ArrayList;
import java.util.List;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;

public class Blog extends MediaFile{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2741836648421739498L;
	
	@Field("summary_t")
	private String summary;
	
	@Field("author_t")
	private String author;
	
	@Field("colorcode_s")
	private String colorcode;
	
	@Field("attachment_ss")
	private String[] attachments;
	
	@Field("featured_pic_s")
	private String featuredPic;
	
	private List<MediaFile> attachmentFiles;
	
	public Blog(){
		//void
	}
	
	public Blog(String uuid){
		this.uuid = uuid;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getColorcode() {
		return colorcode;
	}

	public void setColorcode(String colorcode) {
		this.colorcode = colorcode;
	}

	public String[] getAttachments() {
		return attachments;
	}

	public void setAttachments(String[] attachments) {
		this.attachments = attachments;
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

	public String getFeaturedPic() {
		return featuredPic;
	}

	public void setFeaturedPic(String featuredPic) {
		this.featuredPic = featuredPic;
	}

}
