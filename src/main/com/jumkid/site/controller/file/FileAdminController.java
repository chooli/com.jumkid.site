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
 * 3.0        Dec2013      chooli      creation
 * 
 *
 */

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URLConnection;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.HashMap;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.jumkid.base.model.AbstractBean;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.util.Formatter;
import com.jumkid.site.model.file.IMediaFileService;
import com.jumkid.site.model.file.MediaFile;

@Controller
@Scope("request")
public class FileAdminController {

	protected final Log logger = LogFactory.getLog(this.getClass());

	private IMediaFileService mediaFileService;
	
	private ResponseMediaFileWriter responseMFileWriter;
	
	
	/**
	 * 
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value="/file/info/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String info(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null){
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("uuid", uuid);
			
			try{
				Command cmd = mediaFileService.execute( new Command("fileManager", "load", params) );
				
				return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
				
			}catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
			
		}
		
		return sSession.toServiceJSONResult();
		
	}
		
	/**
	 * 
	 * @param uuid
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/file/stream/{uuid}", method=RequestMethod.GET)
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
				
				response = responseMFileWriter.write(mfile, fileChannel, response);
	         
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
	
	/**
	 * 
	 * @param uuid
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/file/thumbnail/{uuid}", method=RequestMethod.GET)
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
    
	/**
	 * 
	 * @param uuid
	 * @param response
	 * @return
	 */
	@RequestMapping(value="/file/download/{uuid}", method=RequestMethod.GET)
    public void download(@PathVariable("uuid") String uuid, HttpServletResponse response){
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
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/file/search", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String search(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		String keyword = request.getParameter("keyword");
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		String _start = request.getParameter("start");
		Integer start = _start!=null ? Integer.parseInt(_start):0;
		String _limit = request.getParameter("limit");
		Integer limit = _limit!=null ? Integer.parseInt(_limit):20;
		params.put("keyword", keyword);
		params.put("start", start);
		params.put("limit", limit);
		
		try {
			Command cmd = mediaFileService.execute( new Command("searchManager", "search", params) );
			Page<MediaFile> page = (Page<MediaFile>)cmd.getResults().get("page");
			cmd.addResults("mediafiles", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "mediafiles", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/file/list", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String list(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuids", request.getParameterValues("uuids[]"));
		
		
		try {
			Command cmd = mediaFileService.execute( new Command("fileManager", "list", params) );
			
			return sSession.wrapCommand(cmd, "mfiles", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
		
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/file/lock", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String lock(@RequestParam("uuid") String uuid, @RequestParam("passcode") String passcode){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null && passcode!=null && !passcode.isEmpty()){
			try {
				HashMap<String, Object> params = new HashMap<String, Object>();
				params.put("uuid", uuid);
				params.put("passcode", passcode);
				
				Command cmd = mediaFileService.execute( new Command("searchManager", "load", params) );
				MediaFile mfile = (MediaFile)cmd.getResults().get("mfile");
				
				params.put("mfile", mfile);
				cmd = mediaFileService.execute( new Command("searchManager", "update", params) );
				
				return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
				
			} catch (Exception e) {
            	sSession.setErrors(e.getMessage());
            }
						
		}
		
		return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/file/unlock/{uuid}", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String unlock(@PathVariable("uuid") String uuid, @RequestParam("passcode") String passcode){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null && passcode!=null){
			try {
				HashMap<String, Object> params = new HashMap<String, Object>();
				params.put("uuid", uuid);
				
				Command cmd = mediaFileService.execute( new Command("searchManager", "load", params) );
				MediaFile mfile = (MediaFile)cmd.getResults().get("mfile");
				
				params.put("mfile", mfile);
				cmd = mediaFileService.execute( new Command("searchManager", "update", params) );
				
				return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
				
			} catch (Exception e) {
	        	sSession.setErrors(e.getLocalizedMessage());
	        }
		}else{
			sSession.setErrors("Missing parameter");
		}
		
		
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/file/text/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String textSave(@RequestParam("content") String content, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		if (!content.isEmpty()) {
			HashMap<String, Object> params = new HashMap<String, Object>();
			
			String title = request.getParameter("title");
			params.put("fileName", title);
            params.put("mimeType", "text/html; charset=utf-8");
            params.put("file", content.getBytes());
            params.put("content", Formatter.htmlToText(content));
            
            try{
            	Command cmd = mediaFileService.execute( new Command("fileManager", "save", params) );
            	
                return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
                
            } catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
            
		} else {
        	sSession.setErrors("Failed to save text because content is empty.");
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/file/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
		
		try{
			MediaFile mfile = mediaFileService.transformRequestToMediaFile(request);

			HashMap<String, Object> params = new HashMap<String, Object>();
            params.put("mfile", mfile);
            
            Command cmd = mediaFileService.execute( new Command("fileManager", "save", params) );
            
            return sSession.wrapCommand(cmd, "mfile", false).getJsonResult();
            
		} catch (Exception e) {
        	sSession.setErrors("Failed to save file "+e.getMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	/**
	 * 
	 * @param file
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/file/upload", method=RequestMethod.POST)
	@ResponseBody
    public String upload(@RequestParam("file") CommonsMultipartFile[] file, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
       	
		ArrayList<AbstractBean> mfiles = new ArrayList<AbstractBean>();
		
        for (CommonsMultipartFile _file : file) {
        	HashMap<String, Object> params = new HashMap<String, Object>();
        	
            try {
                byte[] bytes = _file.getBytes();
                if(bytes==null || bytes.length==0) continue;
                
                String filename = _file.getOriginalFilename();
                String mimeType = URLConnection.guessContentTypeFromName(filename);
                if(mimeType==null){
                	String mmFilePath = request.getSession().getServletContext().getRealPath("/META-INF/mime.types");
                	MimetypesFileTypeMap mmp = new MimetypesFileTypeMap(mmFilePath);
                	mimeType = mmp.getContentType(filename);
                }                
                params.put("file", bytes);
                
                MediaFile mfile = mediaFileService.transformRequestToMediaFile(request);
                mfile.setFilename(filename);
                mfile.setMimeType(mimeType);
                params.put("mfile", mfile);
                
                Command cmd = mediaFileService.execute( new Command("fileManager", "save", params) );
                mfile = (MediaFile)cmd.getResults().get("mfile");
                mfiles.add(mfile);
                
                sSession.setSuccess(true);
            } catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
        }
        
        return sSession.toServiceJSONResult(mfiles, "mfiles");
    }
	
	@RequestMapping(value="/file/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String remove(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try{
			mediaFileService.execute( new Command("fileManager", "delete", params) );

			sSession.setTotalRecords(new Long(1));
		}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
		
		return sSession.toServiceJSONResult();
	}
	
	private String getLoginUserName(){
		org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return _user.getUsername();
	}

	/**
	 * 
	 * @return
	 */
	public IMediaFileService getMediaFileService() {
		return mediaFileService;
	}

	/**
	 * 
	 * @param mediaFileService
	 */
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
