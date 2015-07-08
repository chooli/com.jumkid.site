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

import java.nio.channels.FileChannel;
import java.util.Date;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.jumkid.base.model.Command;
import com.jumkid.base.util.Constants;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;

public class MediaFileService extends AbstractSiteService<MediaFile> implements IMediaFileService {
		
	private final static String MODULE = "file";
			
	/**
	 * 
	 */
	public synchronized Command execute(Command cmd) throws MediaStoreServiceException {
		
		try{
			super.execute(cmd);
						        	
        	if (isManager("searchManager")) {
                // search file
                if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	Page<MediaFile> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE, pager, scope, MediaFile.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE, pager, scope, MediaFile.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                } 
                
        	} else
    		if(isManager("fileManager")){
 
	        	if(isAction("load")){
	        		String uuid = (String)cmd.getParams().get("uuid");
	        		String scope = (String)cmd.getParams().get("scope");
	        		
	        		MediaFile mfile = fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);
	        		
	        		cmd.getResults().put("mfile", mfile);
	        	} else// save file
                if (isAction("save")) {
                	
                	MediaFile mfile = (MediaFile)cmd.getParams().get("mfile");
                	if (mfile.getUuid()==null) {
                		mfile.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		mfile.setModule(MODULE);
                		mfile.setCreatedDate(new Date());
                		mfile.setSite(this.site);
                		mfile.setActivated(true);
                	}
                	
                	if(mfile.getFilename()==null){
                		mfile.setFilename(mfile.getUuid());
                	}
                	
                	byte[] file = (byte[])cmd.getParams().get("file");
                    //TODO extract meta data and content from office document
                	
                	if(file!=null){
                		mfile = fileStorageRepository.saveFile(file, mfile);
                	}
                	
                	//index media file for search
                	if(mfile!=null && mfile.getLogicalPath()!=null){
                		if( (mfile=fileSearchRepository.saveSearch(mfile))==null )
                			cmd.setError("Failed to index media file entry");
                	}
                	
                	cmd.getResults().put("mfile", mfile);
                }else
            	// get file
                if (isAction("retrieve")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	String filename = (String)cmd.getParams().get("filename");
                	String scope = (String)cmd.getParams().get("scope");
                	                	
                	MediaFile mfile = null;
                	if(uuid!=null){
                		mfile = fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);                			
                	}else
                	if(filename!=null){
                		mfile = fileSearchRepository.findByFilename(filename, this.site, MODULE, scope, MediaFile.class);  
                	}
                	if(mfile!=null){
                		Boolean isRandomAccess = (mfile.getMimeType().startsWith("video") || 
                								  mfile.getMimeType().startsWith("audio")) 
                									? true : false;
                		FileChannel fc = isRandomAccess ? fileStorageRepository.getRandomAccessFile(mfile) : fileStorageRepository.getFile(mfile);
            			
            			cmd.getResults().put("fileChannel", fc);

                		cmd.getResults().put("mfile", mfile);
            		}else{
            			cmd.setError("Failed to retrieve file information");
        			}
                	
                }else
            	// get file thumbnail
                if (isAction("thumbnail")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	boolean large = (boolean)cmd.getParams().get("large");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	if(uuid!=null){
                		MediaFile mfile = fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);
                		if(mfile!=null){
                			FileChannel fc = fileStorageRepository.getThumbnail(mfile, large);
                			
                			cmd.getResults().put("fileChannel", fc);

	                		cmd.getResults().put("mfile", mfile);
                		}else{
                			cmd.setError("Failed to retrieve file information");
            			}
                			
                	}
                	
                }else
            	// get file thumbnail
                if (isAction("avatar")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	boolean large = (boolean)cmd.getParams().get("large");
                	
                	MediaFile mfile = null;
                	if(uuid!=null && !uuid.isEmpty()){
                		mfile = fileSearchRepository.findById(uuid, this.site, Constants.PUBLIC, MediaFile.class);
                	}
                	
                	if(mfile==null){
                		mfile = new MediaFile();
                		mfile.setMimeType("avatar");
                	}
                	
                	FileChannel fc = fileStorageRepository.getThumbnail(mfile, large);
        			
        			cmd.getResults().put("fileChannel", fc);
            		cmd.getResults().put("mfile", mfile);
                	
                }else
            	// delete file
                if (isAction("delete")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	String scope = (String)cmd.getParams().get("scope");
                	
            		if (uuid!=null) {
                		MediaFile mfile = fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);
                		if (mfile!=null) {
            				//delete file from storage
            				fileStorageRepository.deleteFile(mfile);
            				//remove from index
            				fileSearchRepository.remove(mfile);
            			
                		}else{
                			cmd.setError("Failed to retrieve file information");
            			}
                			
                	}                	
                	
                }else 
            	if(isAction("list")){
            		String[] uuids = (String[])cmd.getParams().get("uuids");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Vector<MediaFile> mfiles = new Vector<MediaFile>();
            		for(String uuid : uuids){
            			MediaFile mfile = fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);
            			mfiles.add(mfile);
            		}
            		
                	cmd.getResults().put("mfiles", mfiles);
            	}
                
    		}
        	
        } catch (Exception e) {
        	logger.error("failed to perform "+cmd.getAction()+" in "+cmd.getManager()+" due to "+e.getMessage());
            cmd.setError(e.getLocalizedMessage());
        }
        
        return cmd;
	}
	
	@Override
	public MediaFile transformRequestToMediaFile(HttpServletRequest request)
			throws Exception {
		
		String scope = request.getParameter("scope");
		String uuid = request.getParameter("uuid");
		MediaFile mfile;
		if (uuid!=null && !uuid.isEmpty()) {
			mfile = (MediaFile)fileSearchRepository.findById(uuid, this.site, scope, MediaFile.class);
        	
        } else {
        	mfile = new MediaFile();
        }    
		
		//parse request by fields
		mfile = (MediaFile)this.fillInValueByRequest(mfile, request);
        
		mfile = (MediaFile)this.fillInConcurrencyInfo(mfile, request);

		return mfile;
	}
	
}
