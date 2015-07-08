package com.jumkid.site.model.file;

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

import java.text.SimpleDateFormat;
import java.util.Date;

public class FilePathManager {

	private static FilePathManager instance;
	
	private final static String yyyyMMdd = "yyyy/MM/dd";
	
	private final static String yyyyMM = "yyyy/MM";
	
	private String trashPath = "trash";
	
	public FilePathManager(){
		//void
	}
	
	public static FilePathManager getInstance(){
		if(instance==null){
			synchronized(FilePathManager.class){
				if(instance == null) {
					instance = new FilePathManager();
		        }
			}
		}
		return instance;
	}
	
	/**
	 * 
	 * @param dataHomePath
	 * @return
	 */
	public String getLogicalPath(){
		//format today date string
		SimpleDateFormat df = new SimpleDateFormat(yyyyMM);
        String timestemp = df.format(new Date());
        
        String currentPath = "/" + timestemp;
        return currentPath;
	}
	
	public String getCategoryPath(String mimeType){
		return "/"+mimeType.substring( 0, mimeType.indexOf("/") );
	}

	public String getTrashPath() {
		return trashPath;
	}

	public void setTrashPath(String trashPath) {
		this.trashPath = trashPath;
	}
	
}
