/* 
 * This software is written by Jumkid Ltd. and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 * http://www.jumkid.com
 * mailto:info@jumkid.com
 *
 * (c)2014 Jumkid Ltd. All rights reserved.
 *
 * VERSION   | DATE      | DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 1.0          march2008   mathias      creation
 * 1.0b715     july2008     chooli        support multi site
 *
 */
package com.jumkid.site.controller.user;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.nio.channels.FileChannel;
import java.util.HashMap;

import com.jumkid.base.mail.IMailService;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.model.user.User;
import com.jumkid.base.model.user.IUserService;
import com.jumkid.base.util.Constants;
import com.jumkid.site.controller.file.ResponseMediaFileWriter;
import com.jumkid.site.model.file.IMediaFileService;
import com.jumkid.site.model.file.MediaFile;

@Controller
@Scope("session")
public class UserController {    
	
	protected final Log logger = LogFactory.getLog(this.getClass());

    private IUserService userService;
    
    private IMailService mailService;
    
    private IMediaFileService mediaFileService;
    
    private ResponseMediaFileWriter responseMFileWriter;
    
    @RequestMapping(value="/user/load/{id}", method=RequestMethod.GET)
	@ResponseBody
	public String load(@PathVariable("id") String id, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		Integer userId = Integer.valueOf(id);
    		params.put("id", userId);
    		//for admin user, can load any user
    		//for normal user, can load his own user data
    		if(!isAdmin(request) && !getLoginUser().getId().equals(userId)){
    			sSession.setErrors(Constants.CMSG_NO_PERMISSION);
    		}else{
    			Command cmd = userService.execute( new Command("usermanager", "load", params) );
                
                return sSession.wrapCommand(cmd, "user", false).getJsonResult(); 
    		}
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/user/load-current-user", method=RequestMethod.GET)
	@ResponseBody
	public String loadCurrentUser(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	
    	return sSession.toServiceJSONResult(this.getLoginUser());
	}
    
    @RequestMapping(value="/user/username-exists", method=RequestMethod.POST)
	@ResponseBody
	public String usernameExists(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("username", request.getParameter("username"));
    		Command cmd = userService.execute( new Command("usermanager", "loadByUserName", params) );
    		User user = (User)cmd.getResults().get("user");
    		if(user!=null){
    			sSession.setErrors(Constants.CMSG_DUPLICATED_REC);
    			return sSession.toServiceJSONResult(true, "usernameExists");
    		}
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return sSession.toServiceJSONResult(false, "usernameExists");
				
    }
    
    @RequestMapping(value="/user/email-not-exists", method=RequestMethod.POST)
	@ResponseBody
	public String emailNotExists(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("email", request.getParameter("email"));
    		Command cmd = userService.execute( new Command("usermanager", "loadByEmail", params) );
    		User user = (User)cmd.getResults().get("user");
    		if(user!=null){
    			return sSession.toServiceJSONResult(true, "emailExists");
    		}else{
    			sSession.setErrors(Constants.CMSG_NO_DATA);
    		}
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return sSession.toServiceJSONResult(false, "emailExists");
				
    }
    
    @RequestMapping(value="/user/email-exists", method=RequestMethod.POST)
	@ResponseBody
	public String emailExists(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("email", request.getParameter("email"));
    		Command cmd = userService.execute( new Command("usermanager", "loadByEmail", params) );
    		User user = (User)cmd.getResults().get("user");
    		if(user!=null){
    			sSession.setErrors(Constants.CMSG_DUPLICATED_REC);
    			return sSession.toServiceJSONResult(true, "emailExists");
    		}
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return sSession.toServiceJSONResult(false, "emailExists");
				
    }
    
    @RequestMapping(value="/user/find-pwd", method=RequestMethod.POST)
	@ResponseBody
	public String findPassword(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("email", request.getParameter("email"));
    		Command cmd = userService.execute( new Command("usermanager", "loadByEmail", params) );
    		User user = (User)cmd.getResults().get("user");
    		
    		if(user!=null){    			
    			params.put("msg", user.getUsername());
    			params.put("pwd", user.getPassword());
    			params.put("to", user.getEmail());
    			params.put("subject", "Find jumkid password for "+user.getUsername());
    			params.put("tempalteName", "email-find-password-zh-CN.vm");
    			
    			mailService.execute(new Command("mailManager", "send", params));
    		}
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/user/role", method=RequestMethod.GET)
	@ResponseBody
	public String getUserRole(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	String userRole = null;
    	for(GrantedAuthority authority : _user.getAuthorities()){
    		userRole = authority.getAuthority();
    		if("ROLE_ADMIN".equals(userRole)) break;
    	}
    	
    	return sSession.toServiceJSONResult(userRole, "role");
	}
    
    @RequestMapping(value="/users/search/{keyword}", method=RequestMethod.GET)
	@ResponseBody
	public String search(@PathVariable("keyword") String keyword, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(true);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	Integer start = request.getParameter("start")==null?0:Integer.valueOf(request.getParameter("start"));
        Integer limit = request.getParameter("limit")==null?20:Integer.valueOf(request.getParameter("limit"));                                                
        params.put("start", start);
        params.put("limit", limit);
        params.put("keyword", keyword);
        
    	try{
            Command cmd = userService.execute( new Command("usermanager", "list", params) );
        	                	
        	return sSession.wrapCommand(cmd, "users", true).getJsonResult();
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/user/save", method=RequestMethod.POST)
   	@ResponseBody
   	public String save(HttpServletRequest request){
       	ServiceSession sSession = new ServiceSession(request);
       	sSession.setUser(getLoginUser());
       	HashMap<String, Object> params = new HashMap<String, Object>();
       	
       	try{
       		User transformedUser = userService.transformRequestToUser(request);
            params.put("user", transformedUser);
            
            if(!isAdmin(request) && !getLoginUser().getId().equals(transformedUser.getId())){
    			sSession.setErrors(Constants.CMSG_NO_PERMISSION);
    		}else{
    			Command cmd = userService.execute( new Command("usermanager", "save", params) );  
                User user = (User)cmd.getResults().get("user");
                if(user!=null && user.getId()!=null){
                	sSession.setSuccess(true);
                }
    		}
                        
       	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
       	
       	return sSession.toServiceJSONResult();
       	
   	}
    
    @RequestMapping(value="/user/signup", method=RequestMethod.POST)
   	@ResponseBody
   	public String signup(HttpServletRequest request){
       	ServiceSession sSession = new ServiceSession(request);
       	HashMap<String, Object> params = new HashMap<String, Object>();
       	
       	try{
       		User transformedUser = userService.transformRequestToUser(request);
       		//TODO email activate user account
       		transformedUser.setActivated(false);
            params.put("user", transformedUser);
            
            boolean newRegisterEmail = false;
            if(transformedUser.getId()==null) newRegisterEmail = true;
            
            Command cmd = userService.execute( new Command("usermanager", "save", params) );  
            User user = (User)cmd.getResults().get("user");
            
            /*--send user register email--*/
            if(cmd.getError()==null && newRegisterEmail){
            	params.put("msg", user.getUsername());
    			params.put("to", user.getEmail());
    			params.put("subject", "New user account "+user.getUsername()+" registered");
    			params.put("tempalteName", "email-user-register-zh-CN.vm");
    			
    			mailService.execute(new Command("mailManager", "send", params));
            }
            /*--send user register email end--*/
            
            return sSession.wrapCommand(cmd, "user", false).getJsonResult();
                        
       	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
       	
       	return sSession.toServiceJSONResult();
       	
   	}
    
    @RequestMapping(value="/user/confirm/{username}", method=RequestMethod.GET)
	public String confirm(@PathVariable("username") String username, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("username", username);
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
    		
    		User user = (User)cmd.getResults().get("user");
    		if(user!=null){
    			user.setActivated(true);
    			params.put("user", user);
    			cmd = userService.execute( new Command("usermanager", "save", params) );    			
    			user = (User)cmd.getResults().get("user");    			
    		}    		
    		            
    		request.setAttribute("user", user);
    		
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
    	return "user/confirm";
    }
    
    @RequestMapping(value="/user/reset-pass", method=RequestMethod.POST)
   	@ResponseBody
   	public String resetPass(HttpServletRequest request){
       	ServiceSession sSession = new ServiceSession(false);
       	HashMap<String, Object> params = new HashMap<String, Object>();
       	
       	try{
       		User transformedUser = userService.transformRequestToUser(request);
            params.put("user", transformedUser);
            if(!isAdmin(request) && !getLoginUser().getId().equals(transformedUser.getId())){
    			sSession.setErrors(Constants.CMSG_NO_PERMISSION);
    		}else{
    			Command cmd = userService.execute( new Command("usermanager", "savepassword", params) );  
                User user = (User)cmd.getResults().get("user");
                if(user!=null && user.getId()!=null){
                	sSession.setSuccess(true);
                }
    		}
                                    
       	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
       	
       	return sSession.toServiceJSONResult();
       	
   	}
    
    @RequestMapping(value="/user/remove/{id}", method=RequestMethod.DELETE)
	@ResponseBody
	public String remove(@PathVariable("id") String id, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("id", Integer.valueOf(id));
    		Command cmd = userService.execute( new Command("usermanager", "delete", params) );
            
            return sSession.wrapCommand(cmd).getJsonResult(); 
            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/user/avatar/{username}", method=RequestMethod.GET)
	public void avatar(@PathVariable("username") String username, 
			HttpServletRequest request, HttpServletResponse response){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	params.put("username", username);
    	
    	String _large = request.getParameter("large");
		try{
			params.put("large", Boolean.parseBoolean(_large));
		}catch(Exception e){
			params.put("large", false);
		}
		
    	try{
    		
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
            User user = (User)cmd.getResults().get("user");
            String avatarUuid = user.getAvatar();
            
            params.put("uuid", avatarUuid);

            cmd = mediaFileService.execute( new Command("fileManager", "avatar", params) );
            
            FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
			
			//write binary to http response
			MediaFile mfile = new MediaFile();
			mfile.setMimeType("image/png");
			mfile.setFilename(username);
            response = responseMFileWriter.write(mfile, fileChannel, response);
            	            
            response.flushBuffer();
         
            sSession.setSuccess(true);
            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
				
    }
    
    private User getLoginUser(){
    	org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	params.put("username", _user.getUsername());
		try{
			Command cmd = userService.execute( new Command("usermanager", "loadByUserName", params) );
			User user = (User)cmd.getResults().get("user");
			return user;
		}catch(Exception e){
			e.printStackTrace();
			
		}
		return null;
    	
    }
    
	private boolean isAdmin(HttpServletRequest request){
    	return request.isUserInRole("ROLE_ADMIN");
    }
    
    public IUserService getUserService() {
        return userService;
    }


    public void setUserService(IUserService userService) {
        this.userService = userService;
    }

	public IMailService getMailService() {
		return mailService;
	}


	public void setMailService(IMailService mailService) {
		this.mailService = mailService;
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