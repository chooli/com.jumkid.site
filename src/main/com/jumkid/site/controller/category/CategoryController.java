package com.jumkid.site.controller.category;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

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
import com.jumkid.site.model.category.Category;
import com.jumkid.site.model.category.ICategoryService;

@Controller
@Scope("session")
public class CategoryController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private ICategoryService categoryService;
	
	@RequestMapping(value="/category/load/{id}", method=RequestMethod.GET)
	@ResponseBody
	public String load(@PathVariable("id") String id, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		Integer categoryId = Integer.valueOf(id);
    		params.put("id", categoryId);

    		Command cmd = categoryService.execute( new Command("categorymanager", "load", params) );
            
            return sSession.wrapCommand(cmd, "category", false).getJsonResult();
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
    }
	
	@RequestMapping(value="/category/list", method=RequestMethod.GET)
	@ResponseBody
	public String list(HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		Command cmd = categoryService.execute( new Command("categorymanager", "list", params) );
            
            return sSession.wrapCommand(cmd, "categories", false).getJsonResult();
    		            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
    }
	
	@RequestMapping(value="/category/save", method=RequestMethod.POST)
   	@ResponseBody
   	public String save(HttpServletRequest request){
       	ServiceSession sSession = new ServiceSession(request);
       	HashMap<String, Object> params = new HashMap<String, Object>();
       	
       	try{
       		Category transformedCategory = categoryService.transformRequestToCategory(request);
            params.put("category", transformedCategory);
            
            Command cmd = categoryService.execute( new Command("categorymanager", "save", params) );  
            Category category = (Category)cmd.getResults().get("category");
            if(category!=null && category.getId()!=null){
            	sSession.setSuccess(true);
            }
                        
       	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
       	
       	return sSession.toServiceJSONResult();
       	
   	}
	
	@RequestMapping(value="/category/remove/{id}", method=RequestMethod.DELETE)
	@ResponseBody
	public String remove(@PathVariable("id") String id, HttpServletRequest request){
    	ServiceSession sSession = new ServiceSession(false);
    	HashMap<String, Object> params = new HashMap<String, Object>();
    	
    	try{
    		params.put("id", Integer.valueOf(id));
    		Command cmd = categoryService.execute( new Command("categorymanager", "delete", params) );
            
            return sSession.wrapCommand(cmd).getJsonResult(); 
            
    	}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        return sSession.toServiceJSONResult();
				
    }

	public ICategoryService getCategoryService() {
		return categoryService;
	}

	public void setCategoryService(ICategoryService categoryService) {
		this.categoryService = categoryService;
	}
	

}
