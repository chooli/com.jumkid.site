package com.jumkid.site.controller.product;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLConnection;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.HashMap;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.jumkid.base.model.AbstractBean;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.ServiceSession;
import com.jumkid.site.controller.file.ResponseMediaFileWriter;
import com.jumkid.site.model.product.IProductService;
import com.jumkid.site.model.product.Product;

@Controller
@Scope("session")
public class ProductController {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private IProductService productService;
	
	private ResponseMediaFileWriter responseMFileWriter;
	
	/**
	 * 
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value="/product/load/{uuid}", method=RequestMethod.GET, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String load(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		if(uuid!=null){
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("uuid", uuid);
			
			try{
				Command cmd = productService.execute( new Command("productManager", "load", params) );
				
				return sSession.wrapCommand(cmd, "product", false).getJsonResult();
				
			}catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
			
		}
		
		return sSession.toServiceJSONResult();
		
	}

	@RequestMapping(value="/product/stream/{uuid}", method=RequestMethod.GET)
    public void stream(@PathVariable("uuid") String uuid, 
    		HttpServletRequest request, HttpServletResponse response){
		ServiceSession sSession = new ServiceSession(false);
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try {
		
			Command cmd = productService.execute( new Command("productManager", "retrieve", params) );
			if(cmd.getError()!=null){
				sSession.setErrors(cmd.getError());
				
				//write binary to http response
				InputStream is = new ByteArrayInputStream(sSession.toServiceJSONResult().getBytes());
				IOUtils.copy(is, response.getOutputStream());
	            response.flushBuffer();
	            	            
			}else{
				FileChannel fileChannel = (FileChannel)cmd.getResults().get("fileChannel");
				Product product = (Product)cmd.getResults().get("product");
				
				response = responseMFileWriter.write(product, fileChannel, response);
	            
	            sSession.setSuccess(true);
			}
			
        } catch (IOException e) {
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
	 * @param file
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/product/upload", method=RequestMethod.POST)
	@ResponseBody
    public String upload(@RequestParam("file") CommonsMultipartFile[] file, HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
       	
		ArrayList<AbstractBean> products = new ArrayList<AbstractBean>();
		
        for (CommonsMultipartFile _file : file) {
        	HashMap<String, Object> params = new HashMap<String, Object>();
        	
            try {
                byte[] bytes = _file.getBytes();
                if(bytes==null || bytes.length==0) continue;
                
                String filename = _file.getOriginalFilename();
                String mimeType = URLConnection.guessContentTypeFromName(filename);
                if(mimeType==null){
                	String mmFilePath = request.getSession().getServletContext().getRealPath("/META-INF/mime.types");
                	MimetypesFileTypeMap mmp = new MimetypesFileTypeMap(mmFilePath);
                	mimeType = mmp.getContentType(filename);
                }                
                params.put("file", bytes);
                
                Product product = productService.transformRequestToProduct(request);
                product.setFilename(filename);
                product.setMimeType(mimeType);
                params.put("product", product);
                
                Command cmd = productService.execute( new Command("productManager", "save", params) );
                product = (Product)cmd.getResults().get("product");
                products.add(product);
                
                sSession.setSuccess(true);
            } catch (Exception e) {
            	sSession.setErrors(e.getLocalizedMessage());
            }
        }
        
        return sSession.toServiceJSONResult(products, "products");
    }
	
	@RequestMapping(value="/product/save", method=RequestMethod.POST, produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public String save(HttpServletRequest request){
		ServiceSession sSession = new ServiceSession(request);
       	sSession.setUsername(getLoginUserName());
		
		try{
			Product product = productService.transformRequestToProduct(request);

			HashMap<String, Object> params = new HashMap<String, Object>();
            params.put("product", product);
            
            Command cmd = productService.execute( new Command("productManager", "save", params) );
            
            return sSession.wrapCommand(cmd, "product", false).getJsonResult();
            
		} catch (Exception e) {
        	sSession.setErrors("Failed to save file "+e.getMessage());
        }
        
        return sSession.toServiceJSONResult();
		
	}
	
	@RequestMapping(value="/product/remove/{uuid}", method=RequestMethod.DELETE, produces={"application/json; charset=UTF-8"})
	@ResponseBody
    public String remove(@PathVariable("uuid") String uuid){
		ServiceSession sSession = new ServiceSession(false);
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		params.put("uuid", uuid);
		
		try{
			productService.execute( new Command("productManager", "delete", params) );

			sSession.setTotalRecords(new Long(1));
		}catch (Exception e) {
        	sSession.setErrors(e.getLocalizedMessage());
        }
		
		return sSession.toServiceJSONResult();
	}
	
	private String getLoginUserName(){
		org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return _user.getUsername();
	}

	public IProductService getProductService() {
		return productService;
	}

	public void setProductService(IProductService productService) {
		this.productService = productService;
	}

	public ResponseMediaFileWriter getResponseMFileWriter() {
		return responseMFileWriter;
	}

	public void setResponseMFileWriter(ResponseMediaFileWriter responseMFileWriter) {
		this.responseMFileWriter = responseMFileWriter;
	}
	
}
