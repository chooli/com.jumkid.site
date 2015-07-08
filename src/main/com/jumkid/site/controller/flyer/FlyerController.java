package com.jumkid.site.controller.flyer;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.flyer.Flyer;
import com.jumkid.site.model.flyer.IFlyerService;

@Controller
@Scope("session")
public class FlyerController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IFlyerService flyerService;
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/flyer/load/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
			Command cmd = flyerService.execute( new Command("flyerManager", "load", params) );
						
			return sSession.wrapCommand(cmd, "flyer", false).getJsonResult();
			
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
	@RequestMapping(value="/flyer/search", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
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
			Command cmd = flyerService.execute( new Command("flyerManager", "search", params) );
			Page<Flyer> page = (Page<Flyer>)cmd.getResults().get("page");
			cmd.addResults("flyers", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "flyers", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/flyer/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
				        
        try{            
            Flyer flyer = flyerService.transformRequestToFlyer(request);
        	params.put("flyer", flyer);
        	
        	Command cmd = flyerService.execute( new Command("flyerManager", "save", params) );
        	
            return sSession.wrapCommand(cmd, "flyer", false).getJsonResult();
            
        } catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/flyer/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String remove(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
				        
        try{
        	Command cmd = flyerService.execute(new Command("flyerManager", "delete", params));
        	
        	return sSession.wrapCommand(cmd).getJsonResult();
        	
        }catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
	}

	public IFlyerService getFlyerService() {
		return flyerService;
	}

	public void setFlyerService(IFlyerService flyerService) {
		this.flyerService = flyerService;
	}

}
