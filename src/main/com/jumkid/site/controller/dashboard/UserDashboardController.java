package com.jumkid.site.controller.dashboard;

/* 
 * This software is written by Jumkid Ltd. and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 * 
 * http://www.jumkid.com
 * mailto:info@jumkid.com
 *
 * (c)2014 Jumkid Innovation. All rights reserved.
 *
 *
 */

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.model.datalog.DataLog;
import com.jumkid.base.model.datalog.IDataLogService;
import com.jumkid.base.util.DateUtil;
import com.jumkid.base.util.Formatter;
import com.jumkid.site.model.file.IMediaFileService;

@Controller
@Scope("session")
public class UserDashboardController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IDataLogService dataLogService;
	
	private IMediaFileService mediaFileService;
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String login(HttpServletRequest request){
		return "user/login";
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/dashboard", method=RequestMethod.GET)
	public String dashboard(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		try{
			
			
		}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
		
		return "user/index";
	}
	
	@RequestMapping(value="/dashboard/load/updates", method=RequestMethod.GET)
	@ResponseBody
	public String getModuleUpdates(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		try{
			
			//get past changes from datalog
			params.put("dateBefore", DateUtil.getPreviousDate(7));
			Command cmd = dataLogService.execute(new Command("logmanager", "list", params));
			@SuppressWarnings("unchecked")
			List<DataLog> datalogs = (List<DataLog>)cmd.getResults().get("datalogs");
			List<DataLog> newLst = new ArrayList<DataLog>();
			Set<String> obejctIdSet = new HashSet<String>();
			if(datalogs!=null){
				for(int i=0;i<datalogs.size();i++){
					DataLog datalog = datalogs.get(i);
					datalog.setCreateDate(Formatter.timestampToString(datalog.getCreatedOn(), Formatter.yyyy_MM_dd));
					if(!obejctIdSet.contains(datalog.getObjectId())){
						if(!"DELETE".equals(datalog.getAction())){
							//not showing deleted log
							newLst.add(datalog);
						}
						obejctIdSet.add(datalog.getObjectId());
					}
				}
			}
			cmd.addResults("datalogs", newLst);
			return sSession.wrapCommand(cmd, "datalogs", true).getJsonResult();
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
		
	}

	public IDataLogService getDataLogService() {
		return dataLogService;
	}

	public void setDataLogService(IDataLogService dataLogService) {
		this.dataLogService = dataLogService;
	}

	public IMediaFileService getMediaFileService() {
		return mediaFileService;
	}

	public void setMediaFileService(IMediaFileService mediaFileService) {
		this.mediaFileService = mediaFileService;
	}
	
	
}
