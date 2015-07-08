package com.jumkid.site.controller.social;

import java.util.HashMap;

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
import com.jumkid.site.model.social.ISocialCommentService;

@Controller
@Scope("request")
public class SocialCommentAdminController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private ISocialCommentService socialCommentService;
	
	@RequestMapping(value="/socialcomment/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String remove(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null){
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("uuid", uuid);
			
			try{
				socialCommentService.execute( new Command("socialCommentManager", "delete", params) );

				sSession.setTotalRecords(new Long(1));
			}catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
			
		}else {
        	sSession.setErrors("uuid is empty");
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
