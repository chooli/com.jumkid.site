package com.jumkid.site.controller.file;

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
 * 3.0        Dec2014      chooli      creation
 * 
 *
 */

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.channels.FileChannel;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.file.IMediaFileService;
import com.jumkid.site.model.file.MediaFile;

@Controller
@Scope("session")
public class FileShareController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());

	private IMediaFileService mediaFileService;
	
	private ResponseMediaFileWriter responseMFileWriter;
	
	/**
	 * 
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value="/file/i/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String info(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null){
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("uuid", uuid);
			
			try{
				Command cmd = mediaFileService.execute( new Command("searchManager", "load", params) );
				
				return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
				
			}catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
			
		}
		
		return sSession.toServiceJSONResult();
		
	}
		
	
	@RequestMapping(value="/file/s/{uuid}", method=RequestMethod.GET)
    public void stream(@PathVariable("uuid") String uuid, 
    		HttpServletRequest request, HttpServletResponse response){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		String _passcode = request.getParameter("passcode");
		params.put("passcode", _passcode);
		
		try {
		
			Command cmd = mediaFileService.execute( new Command("fileManager", "retrieve", params) );
			if(cmd.getError()!=null){
				sSession.setErrors(cmd.getError());
				
				//write binary to http response
				InputStream is = new ByteArrayInputStream(sSession.toServiceJSONResult().getBytes());
				IOUtils.copy(is, response.getOutputStream());
	            response.flushBuffer();
	            	            
			}else{
				FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
				MediaFile mfile = (MediaFile)cmd.getResults().get("mfile");
				
				if(mfile.getMimeType().startsWith("audio") || mfile.getMimeType().startsWith("video")){
					response = responseMFileWriter.stream(mfile, fileChannel, request, response);
				}else{
					response = responseMFileWriter.write(mfile, fileChannel, response);
				}
					            	         
	            sSession.setSuccess(true);
			}
			
        } catch (Exception e) {
            e.printStackTrace();
            sSession.setErrors(e.getLocalizedMessage());
        } finally{
        	try{
        		response.flushBuffer();
        	}catch(Exception e){
        		e.printStackTrace();
        	}
        }
		
	}
	
	@RequestMapping(value="/file/tmb/{uuid}", method=RequestMethod.GET)
    public void thumbnail(@PathVariable("uuid") String uuid, 
    		HttpServletRequest request, HttpServletResponse response){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);

		String _large = request.getParameter("large");
		try{
			params.put("large", Boolean.parseBoolean(_large));
		}catch(Exception e){
			params.put("large", false);
		}
		
		try {
		
			Command cmd = mediaFileService.execute( new Command("fileManager", "thumbnail", params) );
			if(cmd.getError()!=null){
				sSession.setErrors(cmd.getError());
				
				//write binary to http response
				InputStream is = new ByteArrayInputStream(sSession.toServiceJSONResult().getBytes());
				IOUtils.copy(is, response.getOutputStream());
	            response.flushBuffer();
	            	            
			}else{
				FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
				
				//write binary to http response
				MediaFile mfile = new MediaFile();
				mfile.setMimeType("image/png");
				mfile.setFilename(uuid);
	            response = responseMFileWriter.write(mfile, fileChannel, response);
	            	            
	            response.flushBuffer();
	         
	            sSession.setSuccess(true);
			}
			
        } catch (Exception e) {
            e.printStackTrace();
            sSession.setErrors(e.getLocalizedMessage());
        }
		
	}
    
	@RequestMapping(value="/file/d/{uuid}", method=RequestMethod.GET)
    public String download(@PathVariable("uuid") String uuid, HttpServletResponse response){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
		
			Command cmd = mediaFileService.execute( new Command("fileManager", "retrieve", params) );
			FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
			MediaFile mfile = (MediaFile)cmd.getResults().get("mfile");
			
			//write binary to http response
        	response = responseMFileWriter.writeForDownload(mfile, fileChannel, response);
			response.flushBuffer();
         
            sSession.setSuccess(true);
        } catch (Exception e) {
            e.printStackTrace();
            sSession.setErrors(e.getLocalizedMessage());
        }
		
		return sSession.toServiceJSONResult();
	}
	
	
	public IMediaFileService getMediaFileService() {
		return mediaFileService;
	}

	public void setMediaFileService(IMediaFileService mediaFileService) {
		this.mediaFileService = mediaFileService;
	}


	public ResponseMediaFileWriter getResponseMFileWriter() {
		return responseMFileWriter;
	}


	public void setResponseMFileWriter(ResponseMediaFileWriter responseMFileWriter) {
		this.responseMFileWriter = responseMFileWriter;
	}
	
}
