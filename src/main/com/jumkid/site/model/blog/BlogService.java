package com.jumkid.site.model.blog;

import java.nio.channels.FileChannel;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.jumkid.base.exception.BeanValidateException;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.IAbstractBeanValidator;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.base.util.Formatter;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.FormValidatoinException;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;

public class BlogService extends AbstractSiteService<Blog> implements IBlogService{
	
	private final static String MODULE_NAME = "blog";
	
	private IAbstractBeanValidator abstractBeanValidator;
				
	@Override
	public synchronized Command execute(Command cmd) throws MediaStoreServiceException {
		try{
			super.execute(cmd);
			        	
        	if (isManager("blogManager")) {
                if (isAction("save")) {
                	byte[] file = (byte[])cmd.getParams().get("file");
                             	
                	//fill in necessary fields
                	Blog blog = (Blog)cmd.getParams().get("blog");
                	if (blog.getUuid()==null ||  blog.getUuid().isEmpty()) {
                		blog.setUuid(UUIDGenerator.next());//get unique id for file name for storage
                		blog.setModule(MODULE_NAME);
                		blog.setCreatedDate(new Date());
                		blog.setSite(this.site);
                		blog.setMimeType("text/html");
                	}
                	
                	if(blog.getFilename()==null || blog.getFilename().isEmpty()){
                		blog.setFilename(blog.getUuid());
                	}
                	
                	fileStorageRepository.saveFile(file, blog);
                	
                	//index media file for search
                	if(blog!=null && blog.getLogicalPath()!=null){
                		if( (blog=(Blog)fileSearchRepository.saveSearch(blog))==null )
                			cmd.setError("Failed to index blog entry");
                	}
                	
                	cmd.getResults().put("blog", blog);
                }else
            	if (isAction("search")) {
                	String keyword = (String)cmd.getParams().get("keyword");
                	Integer start = (Integer)cmd.getParams().get("start");
                	Integer limit = (Integer)cmd.getParams().get("limit");
                	String scope = (String)cmd.getParams().get("scope");
                	
                	Page<Blog> page = null;
                	Pageable pager =new PageRequest(start, limit); 
                	
                	if(keyword!=null && !keyword.isEmpty()){
                		page = fileSearchRepository.findByText(keyword, this.site, MODULE_NAME, pager, scope, Blog.class);
                		
                	}else{
            			page = fileSearchRepository.findBySite(this.site, MODULE_NAME, pager, scope, Blog.class);
            		}
                	
                	cmd.getResults().put("page", page);
                	
                }else 
            	if(isAction("load")){
            		String uuid = (String)cmd.getParams().get("uuid");
            		String filename = (String)cmd.getParams().get("filename");
            		String scope = (String)cmd.getParams().get("scope");
            		
            		Blog blog = null;
            		if(uuid!=null){
            			blog = fileSearchRepository.findById(uuid, this.site, scope, Blog.class);
            		}else
        			if(filename!=null){
        				blog = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Blog.class);
        			}
            		
            		cmd.getResults().put("blog", blog);
            	}else
        		if (isAction("retrieve")) {
                	String uuid = (String)cmd.getParams().get("uuid");
                	String filename = (String)cmd.getParams().get("filename");
                	String scope = (String)cmd.getParams().get("scope");
                	                	
                	Blog blog = null;
                	if(uuid!=null){
                		blog = fileSearchRepository.findById(uuid, this.site, scope, Blog.class);                			
                	}else
                	if(filename!=null){
                		blog = fileSearchRepository.findByFilename(filename, this.site, MODULE_NAME, scope, Blog.class);  
                	}
                	if(blog!=null){
                		FileChannel fc = fileStorageRepository.getFile(blog);
                		
                    	cmd.getResults().put("fileChannel", fc);
                		cmd.getResults().put("blog", blog);
            		}else{
            			cmd.setError("Failed to retrieve file information");
        			}
                	
                }else
        		if (isAction("delete")) {
        			String uuid = (String)cmd.getParams().get("uuid");
        			String scope = (String)cmd.getParams().get("scope");
        			
        			try{
        				Blog blog = fileSearchRepository.findById(uuid, this.site, scope, Blog.class);
        				if(blog!=null){
        					fileStorageRepository.deleteFile(blog);
        					fileSearchRepository.remove(uuid, this.site, Blog.class);
        				}
        			}catch(Exception e){
        				cmd.setError("Failed to delete file "+e.getMessage());
        			}
        			                	
        		}
        	}
        	
		}catch (Exception e) {
        	logger.error("failed to perform "+cmd.getAction()+" in "+cmd.getManager()+" due to "+e.getMessage());
            cmd.setError(e.getLocalizedMessage());
        }
        
        return cmd;
        
	}
	

	@Override
	public Blog transformRequestToBlog(HttpServletRequest request)
			throws Exception {
		
		String uuid = request.getParameter("uuid");
		Blog blog;
		
		try {
			String scope = request.getParameter("scope");
			
			if (uuid!=null && !uuid.isEmpty()) {
				blog = (Blog)fileSearchRepository.findById(uuid, this.site, scope, Blog.class);
	        	
	        } else {
	        	blog = new Blog();
	        	blog.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
	        	blog.setCreatedBy(ServiceSession.getUsername(request));
	        }    
			
			//parse request by fields
			blog = (Blog)this.fillInValueByRequest(blog, request);
	        
			blog = (Blog)this.fillInConcurrencyInfo(blog, request);   
		
			String content = request.getParameter("htmlContent");
			blog.setContent(Formatter.htmlToText(content));
			if(blog.getSummary()==null || blog.getSummary().trim().isEmpty()){
				int _len = blog.getContent().length();
				blog.setSummary(blog.getContent().substring(0, _len > 36 ? 36 : _len));
			}
		
			//bean validation
	        abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "title", blog);

		}catch(BeanValidateException bve) {
			throw new FormValidatoinException(bve.getMessage());
		}

		return blog;
	}


	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}


	public void setAbstractBeanValidator(IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}
		
}
