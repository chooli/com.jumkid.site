package com.jumkid.site.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.IApiSpecService;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.file.MediaFile;
import com.jumkid.site.search.IFileSearchRepository;

@Controller
public class ApiSpecController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IFileSearchRepository<MediaFile> fileSearchRepository;

	private IApiSpecService apiSpecService;
	
	@RequestMapping(value="/apispec", method=RequestMethod.GET)
	public String login(HttpServletRequest request){
		return "user/apispec";
	}
	
	@RequestMapping(value="/apispec/site", method=RequestMethod.GET)
	@ResponseBody
	public String getSite(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		String site = fileSearchRepository.getSite();
		
		return sSession.toServiceJSONResult(site,"site");
		
	}
	
	@RequestMapping(value="/apispec/module/{modulename}", method=RequestMethod.GET)
	@ResponseBody
	public String getModule(@PathVariable("modulename") String modulename, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(true);
		Command cmd = null;
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("module", modulename);
		
		try{
			cmd = apiSpecService.execute( new Command("apimanager", "load", params) );
			
			return sSession.wrapCommand(cmd, "apispec", false).getJsonResult();
			
		}catch(Exception e){
			sSession.setSuccess(false);
			sSession.setErrors(e.getLocalizedMessage());
		}
		
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/apispec/json", method=RequestMethod.GET)
	@ResponseBody
	public String specification(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		Command cmd = null;
		
		//String contextPath = request.getContextPath();
		//String servletPath = request.getServletPath();
		
		try{
			cmd = apiSpecService.execute( new Command("apimanager", "list", null) );
	    	
			return sSession.wrapCommand(cmd, "apispecs", true).getJsonResult();
			
		}catch(Exception e){
			sSession.setErrors(e.getLocalizedMessage());
		}
		
		return sSession.toServiceJSONResult();
		
	}
	

	public IApiSpecService getApiSpecService() {
		return apiSpecService;
	}

	public void setApiSpecService(IApiSpecService apiSpecService) {
		this.apiSpecService = apiSpecService;
	}

	public IFileSearchRepository<MediaFile> getFileSearchRepository() {
		return fileSearchRepository;
	}

	public void setFileSearchRepository(IFileSearchRepository<MediaFile> fileSearchRepository) {
		this.fileSearchRepository = fileSearchRepository;
	}
	
}
