package com.jumkid.site.controller.blog;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.channels.FileChannel;
import java.util.HashMap;

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
import org.springframework.web.bind.annotation.ResponseBody;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.util.Constants;
import com.jumkid.site.controller.file.ResponseMediaFileWriter;
import com.jumkid.site.model.blog.Blog;
import com.jumkid.site.model.blog.IBlogService;
import com.jumkid.site.model.file.IMediaFileService;

@Controller
@Scope("session")
public class BlogController {

	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IBlogService blogService;
	
	private IMediaFileService mediaFileService;
	
	private ResponseMediaFileWriter responseMFileWriter;
	
	/**
	 * 
	 * @param keyword
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/blog/load", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		String uuid = request.getParameter("uuid");
		String filename = request.getParameter("filename");
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		params.put("filename", filename);
		try {
			Command cmd = blogService.execute( new Command("blogManager", "load", params) );
						
			return sSession.wrapCommand(cmd, "blog", false).getJsonResult();
			
		} catch (Exception e) {
	       	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
	    }
		
		return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/blog/stream/{uuid}", method=RequestMethod.GET)
    public void stream(@PathVariable("uuid") String uuid, 
    		HttpServletRequest request, HttpServletResponse response){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
		
			Command cmd = blogService.execute( new Command("blogManager", "retrieve", params) );
			
			if(cmd.getError()!=null){
				sSession.setErrors(cmd.getError());
				
				//write binary to http response
				InputStream is = new ByteArrayInputStream(sSession.toServiceJSONResult().getBytes());
				IOUtils.copy(is, response.getOutputStream());
	            response.flushBuffer();
	            	            
			}else{
				FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
				Blog blog = (Blog)cmd.getResults().get("blog");
				
				response = responseMFileWriter.write(blog, fileChannel, response);
	            	         
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
	 * @param keyword
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/blog/search", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
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
			Command cmd = blogService.execute( new Command("blogManager", "search", params) );
			Page<Blog> page = (Page<Blog>)cmd.getResults().get("page");
			cmd.addResults("blogs", page.getContent());
			
			sSession.wrapPage(page, start);
			sSession.setSuccess(true);
			
			return sSession.wrapCommand(cmd, "blogs", true).getJsonResult();
			
		} catch (Exception e) {
        	sSession.setErrors( e.getMessage()!=null?e.getMessage():e.getClass().getName() );
        }
			
		return sSession.toServiceJSONResult();
	}
	
	@RequestMapping(value="/blog/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
		
		HashMap<String, Object> params = new HashMap<String, Object>();
				        
        try{
        	String content = request.getParameter("htmlContent");
            params.put("file", content.getBytes(Constants.UTF8_CHARSET));
            
        	Blog blog = blogService.transformRequestToBlog(request);
        	params.put("blog", blog);
        	
        	Command cmd = blogService.execute( new Command("blogManager", "save", params) );
        	
            return sSession.wrapCommand(cmd, "blog", false).getJsonResult();
            
        } catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/blog/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String remove(@PathVariable("uuid") String uuid, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
				        
        try{
        	Command cmd = blogService.execute(new Command("blogManager", "delete", params));
        	
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
	
	public IBlogService getBlogService() {
		return blogService;
	}

	public void setBlogService(IBlogService blogService) {
		this.blogService = blogService;
	}

	public ResponseMediaFileWriter getResponseMFileWriter() {
		return responseMFileWriter;
	}

	public void setResponseMFileWriter(ResponseMediaFileWriter responseMFileWriter) {
		this.responseMFileWriter = responseMFileWriter;
	}

	public IMediaFileService getMediaFileService() {
		return mediaFileService;
	}

	public void setMediaFileService(IMediaFileService mediaFileService) {
		this.mediaFileService = mediaFileService;
	}
	
	
	
}
