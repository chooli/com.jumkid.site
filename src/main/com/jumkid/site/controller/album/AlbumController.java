package com.jumkid.site.controller.album;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.album.Album;
import com.jumkid.site.model.album.IAlbumService;

@Controller
@Scope("session")
public class AlbumController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IAlbumService albumService;
		
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/album/load/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
			Command cmd = albumService.execute( new Command("albumManager", "load", params) );
						
			return sSession.wrapCommand(cmd, "album", false).getJsonResult();
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/album/search", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
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
			Command cmd = albumService.execute( new Command("albumManager", "search", params) );
			Page<Album> page = (Page<Album>)cmd.getResults().get("page");
			cmd.addResults("albums", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "albums", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/album/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
		
		HashMap<String, Object> params = new HashMap<String, Object>();
				        
        try{            
            Album album = albumService.transformRequestToAlbum(request);
        	params.put("album", album);
        	
        	Command cmd = albumService.execute( new Command("albumManager", "save", params) );
        	
            return sSession.wrapCommand(cmd, "album", false).getJsonResult();
            
        } catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/album/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String remove(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
				        
        try{
        	Command cmd = albumService.execute(new Command("albumManager", "delete", params));
        	
        	return sSession.wrapCommand(cmd).getJsonResult();
        	
        }catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
	}
	
	private String getLoginUserName(){
		org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return _user.getUsername();
	}

	public IAlbumService getAlbumService() {
		return albumService;
	}

	public void setAlbumService(IAlbumService albumService) {
		this.albumService = albumService;
	}
	
	
}
