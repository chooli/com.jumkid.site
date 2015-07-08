package com.jumkid.site.controller.social;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.model.social.ISocialCommentService;
import com.jumkid.site.model.social.SocialComment;

@Controller
@Scope("session")
public class SocialCommentController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private ISocialCommentService socialCommentService;
	
	
	@RequestMapping(value="/socialcomment/load", method=RequestMethod.POST)
	@ResponseBody
    public String load(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);

        HashMap<String, Object> params = new HashMap<String, Object>();
		
		String _start = request.getParameter("start");
		Integer start = _start!=null ? Integer.parseInt(_start):0;
		String _limit = request.getParameter("limit");
		Integer limit = _limit!=null ? Integer.parseInt(_limit):20;
		params.put("start", start);
		params.put("limit", limit);
		
		params.put("module", request.getParameter("module"));
		params.put("moduleRefId", request.getParameter("moduleRefId"));

		try {
		
			Command cmd = socialCommentService.execute( new Command("socialCommentManager", "load", params) );
			@SuppressWarnings("unchecked")
			Page<SocialComment> page = (Page<SocialComment>)cmd.getResults().get("page");
			cmd.addResults("socialComments", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "socialComments", true).getJsonResult();
			
        } catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/socialcomment/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
		
		try{
			SocialComment socialComment = socialCommentService.transformRequestToSocialComment(request);

			HashMap<String, Object> params = new HashMap<String, Object>();
            params.put("socialComment", socialComment);
            
            Command cmd = socialCommentService.execute( new Command("socialCommentManager", "save", params) );
            
            return sSession.wrapCommand(cmd, "socialComment", false).getJsonResult();
            
		} catch (Exception e) {
        	sSession.setErrors("Failed to save socialComment "+e.getMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}

	public ISocialCommentService getSocialCommentService() {
		return socialCommentService;
	}

	public void setSocialCommentService(ISocialCommentService socialCommentService) {
		this.socialCommentService = socialCommentService;
	}
	
}
