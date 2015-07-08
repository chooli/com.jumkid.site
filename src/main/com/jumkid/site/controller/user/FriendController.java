package com.jumkid.site.controller.user;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.mail.IMailService;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.model.event.Event;
import com.jumkid.base.model.event.IEventService;
import com.jumkid.base.model.user.IUserService;
import com.jumkid.base.model.user.User;
import com.jumkid.base.rest.security.SecureUserDetailsService;
import com.jumkid.base.util.Constants;

@Controller
@Scope("session")
public class FriendController {
	
	public static final String MODLUE = "friend";
	
	protected final Log logger = LogFactory.getLog(this.getClass());

    private IUserService userService;
    
    private IMailService mailService;
    
    private SecureUserDetailsService secureUserDetailsService;
    
    private IEventService eventService;
    
    @RequestMapping(value="/friend/load/{username}", method=RequestMethod.GET)
	@ResponseBody
	public String load(@PathVariable("username") String username, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("username", username);
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
            
            return sSession.wrapCommand(cmd, "user", false).getJsonResult(); 
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/friend/find", method=RequestMethod.POST)
	@ResponseBody
	public String find(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	String usernameOrEmail = request.getParameter("usernameOrEmail");
    	boolean isUserEmail = false;
    	try{
    		InternetAddress internetAddress = new InternetAddress(usernameOrEmail);
    		internetAddress.validate();
    		
    		isUserEmail = true;
    	}catch(AddressException ae){
    		//void
    	}
    	
    	try{
    		Command cmd;
    		if(isUserEmail){
    			params.put("email", usernameOrEmail);
    			cmd = userService.execute( new Command("usermanager", "loadByEmail", params) );
    		}else{
    			params.put("username", usernameOrEmail);
    			cmd = userService.execute( new Command("usermanager", "loadByUserName", params) );
    		}
            
            return sSession.wrapCommand(cmd, "user", false).getJsonResult(); 
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/friend/my", method=RequestMethod.GET)
	@ResponseBody
	public String myFriends(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("username", getCurrentUser().getUsername());
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
    		User user = (User)cmd.getResults().get("user");
    		ArrayList<User> friends = new ArrayList<User>();
    		friends.addAll(user.getFriends());
    		cmd.getResults().put("friends", friends );
            
            return sSession.wrapCommand(cmd, "friends", true).getJsonResult();    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @SuppressWarnings("unchecked")
	@RequestMapping(value="/friend/list/{keyword}", method=RequestMethod.GET)
	@ResponseBody
	public String list(@PathVariable("keyword") String keyword, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("keyword", keyword);
    		params.put("scope", isAdminUser() ? Constants.PUBLIC : Constants.PRIVATE );
    		
    		Command cmd = userService.execute( new Command("usermanager", "list", params) );
    		List<User> users = (List<User>)cmd.getResults().get("users");
    		cmd.getResults().put("friends", users);
            
            return sSession.wrapCommand(cmd, "friends", true).getJsonResult();
    		     		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/friend/invite", method=RequestMethod.POST)
	@ResponseBody
	public String invite(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	
    	try{
    		/*-- create temporary user account --*/
    		/*
    		User transformedUser = userService.transformRequestToUser(request);
    		if(transformedUser.getPassword()==null){
    			RandomPasswordGenerator randomPwd = new RandomPasswordGenerator(6);
    			transformedUser.setPassword(randomPwd.next());
    		}
    		params.put("user", transformedUser);
    		Command cmd = userService.execute(new Command("usermanager", "save", params));
    		User newFirend = (User)cmd.getResults().get("user");
    		
    		User me = getCurrentUser();
    		me.addFriend(newFirend);
    		params.put("user", me);
    		userService.execute(new Command("usermanager", "save", params));
    		*/
    		/*-- create temporary user account end --*/
    		
    		
            //send invite email
    		sendInvitation(request.getParameter("mailMsg"), request.getParameter("email"));
			    		
			sSession.setSuccess(true);
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/friend/connect", method=RequestMethod.POST)
	@ResponseBody
	public String connect(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();    	
    	
    	try{
    		/*-- create connection event --*/
    		String message = request.getParameter("mailMsg");
    		String targetRefId = request.getParameter("username");
    		Event event = eventService.generateEvent("connect", MODLUE, message, targetRefId);
    		/*-- create connection event end--*/
    		params.put("event", event);
    		
    		eventService.execute(new Command("eventmanager", "save", params));
    		
    		/*-- send invite email --*/
    		params.put("username", targetRefId);
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
    		User targetUser = (User)cmd.getResults().get("user");
    		if(targetUser!=null){
    			sendInvitation(message, targetUser.getEmail());
    		}    		
    		/*-- send invite email end--*/
    		
    		sSession.setSuccess(true);
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }
    
    @RequestMapping(value="/friend/disconnect", method=RequestMethod.POST)
	@ResponseBody
    public String disconnect(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();    
    	
    	try{
    		params.put("username", request.getParameter("friendname"));
    		Command cmd = userService.execute( new Command("usermanager", "load", params) );
    		
    		boolean hasFound = false;
    		
    		//remove relationship
    		User friend = (User)cmd.getResults().get("user");
    		User me = getCurrentUser();
    		
    		//remove friend from me
    		for(User _user:me.getFriends()){
    			if(_user.getUsername().equals(friend.getUsername())){
    				hasFound = me.getFriends().contains(_user);
    				me.getFriends().remove(_user);
    				break;
    			};
    		}
    		if(hasFound){
    			params.put("user", me);
        		userService.execute(new Command("usermanager", "save", params));
    		}
    		    		
    		//remove me from friend
    		for(User _user:friend.getFriends()){
    			if(_user.getUsername().equals(me.getUsername())){
    				hasFound = friend.getFriends().contains(_user);
    				friend.getFriends().remove(_user);
    				break;
    			};
    		}
    		if(hasFound){
    			params.put("user", friend);
        		userService.execute(new Command("usermanager", "save", params)); 
    		}
    		   		
    		
    		sSession.setSuccess(true);
    		
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
    	
        return sSession.toServiceJSONResult();
    	
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
    
    private User getCurrentUser(){
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
    
    private boolean isAdminUser(){
		try{
			org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = _user.getUsername();
			
			for(GrantedAuthority authority : secureUserDetailsService.loadUserByUsername(username).getAuthorities()){
				if("ROLE_ADMIN".equals(authority.getAuthority())){
					return true;
				}
			}
		}catch(Exception e){
			//void
		}
				
		return false;
	}
    
    @Async
    private void sendInvitation(String mailMsg, String emailAddress){
    	HashMap<String, Object> params = new HashMap<String, Object>();   
    	try{
    		params.put("msg", mailMsg);
    		params.put("to", emailAddress);
    		params.put("subject", "Invite from jumkid.com");
    		params.put("tempalteName", "email-friend-invite-zh-CN.vm");
    		
    		mailService.execute(new Command("mailManager", "send", params));
    	}catch(Exception e){
    		logger.error("Failed to send invitation by email");
    	}		
		
		return;
    }

	public SecureUserDetailsService getSecureUserDetailsService() {
		return secureUserDetailsService;
	}

	public void setSecureUserDetailsService(
			SecureUserDetailsService secureUserDetailsService) {
		this.secureUserDetailsService = secureUserDetailsService;
	}

	public IEventService getEventService() {
		return eventService;
	}

	public void setEventService(IEventService eventService) {
		this.eventService = eventService;
	}

}
