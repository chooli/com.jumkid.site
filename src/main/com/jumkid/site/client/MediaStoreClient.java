package com.jumkid.site.client;

import java.io.File;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.jumkid.site.model.file.MediaFile;
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
 * (c)2013 Jumkid Ltd. All rights reserved.
 *
 * VERSION   |  DATE      |  DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 3.0          Apr2014     chooli       creation
 *
 */
public class MediaStoreClient {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private RestTemplate restTemplate;
	private	String mediaStoreURL;
	
	static final String username = "admin";
    static final String password = "admin"; 
	
    /**
     * 
     * @param fileId
     * @return
     */
	public MediaFile loadMediaFile(String fileId){
		
		logger.debug("going to load media file from media store thr restful webservices");
		
		//prepare url variables
		//Map<String, String> urlVariables = new HashMap<String, String>();
		//urlVariables.put("fileId", fileId);
		
		SingleMediaFileResponse response = restTemplate.getForObject(mediaStoreURL+"/file/info/{fileId}", SingleMediaFileResponse.class, fileId);
		if(response.isSuccess()){
			MediaFile mfile = response.getMediafile();
			
			return mfile;
		}else{
			return null;
		}
		
	}
	
	/**
     * 
     * @param fileId
     * @return
     */
	public void deleteMediaFile(String fileId){
		
		logger.debug("going to delete media file from media store thr restful webservices");
		
		restTemplate.delete(mediaStoreURL+"/file/remove/{fileId}", fileId);
					
	}
	
	/**
	 * 
	 * @param fileId
	 * @param contentType
	 * @return
	 */
	public byte[] downloadMediaFile(String fileId, String contentType){
		
		logger.debug("going to download media file from media store thr restful webservices");
		
		ByteArrayHttpMessageConverter byteArrayHttpMessageConverter = new ByteArrayHttpMessageConverter();
		List<MediaType> mediaTypes = new ArrayList<MediaType>();
		mediaTypes.add(MediaType.ALL);
		byteArrayHttpMessageConverter.setSupportedMediaTypes(mediaTypes);

        restTemplate.getMessageConverters().add( byteArrayHttpMessageConverter );
        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		HttpHeaders headers = new HttpHeaders();
	    headers.set("Content-Type", "application/octet-stream");

	    HttpEntity<String> entity = new HttpEntity<String>(headers);

	    // Send the request as GET
	    ResponseEntity<byte[]> result= restTemplate.exchange(mediaStoreURL+"/file/download/{fileId}", HttpMethod.GET, entity, byte[].class, fileId);
		
		return result.getBody();
	}
	
	/**
	 * 
	 * @param fileId
	 * @param contentType
	 * @return
	 */
	public byte[] getMediaFileThumbnail(String fileId){
		
		logger.debug("going to get media file thumbnail from media store thr restful webservices");
		
		ByteArrayHttpMessageConverter byteArrayHttpMessageConverter = new ByteArrayHttpMessageConverter();
		List<MediaType> mediaTypes = new ArrayList<MediaType>();
		mediaTypes.add(MediaType.ALL);
		byteArrayHttpMessageConverter.setSupportedMediaTypes(mediaTypes);

        restTemplate.getMessageConverters().add( byteArrayHttpMessageConverter );
        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
		
		HttpHeaders headers = new HttpHeaders();
	    headers.set("Content-Type", "image/png");

	    HttpEntity<String> entity = new HttpEntity<String>(headers);

	    // Send the request as GET
	    ResponseEntity<byte[]> result= restTemplate.exchange(mediaStoreURL+"/file/thumbnail/{fileId}", HttpMethod.GET, entity, byte[].class, fileId);
		
		return result.getBody();
	}
	
	/**
	 * 
	 * @param keyword
	 * @return
	 */
	public List<MediaFile> searchMediaFile(String keyword){
		
		logger.debug("going to search media file from media store thr restful webservices");
		
		MultiMediaFileResponse response = restTemplate.getForObject(mediaStoreURL+"/file/search/{keyword}", MultiMediaFileResponse.class, keyword);
		
		if(response.isSuccess()){
			List<MediaFile> mfiles = response.getMediafiles();
			
			return mfiles;
		}else{
			return null;
		}
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @return
	 */
	public List<MediaFile> listModuleMediaFile(String module, String moduleRefId){
		
		logger.debug("going to list media file from media store thr restful webservices");
		//prepare url variables
		Map<String, String> urlVariables = new HashMap<String, String>();
		urlVariables.put("module", module);
		urlVariables.put("moduleRefId", moduleRefId);
		
		MultiMediaFileResponse response = restTemplate.getForObject(mediaStoreURL+"/file/list?module={module}&moduleRefId={moduleRefId}", 
				MultiMediaFileResponse.class, urlVariables);
		
		if(response.isSuccess()){
			List<MediaFile> mfiles = response.getMediafiles();
			
			return mfiles;
		}else{
			return null;
		}
		
	}
	
	/**
	 * 
	 * @param keyword
	 * @return
	 */
	public MediaFile saveModuleMediaFile(String module, String moduleRefId, String filename, File file){
		
		logger.debug("going to search media file from media store thr restful webservices");
		//prepare multipart variables
		MultiValueMap<String, Object> parts = new LinkedMultiValueMap<String, Object>();
		parts.add("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
		parts.add("module", module);
		parts.add("moduleRefId", moduleRefId);
		parts.add("filename", filename);
		parts.add("file", new FileSystemResource(file));
		
		FormHttpMessageConverter formHttpMessageConverter = new FormHttpMessageConverter();
        formHttpMessageConverter.setCharset(Charset.forName("UTF8"));

        restTemplate.getMessageConverters().add( formHttpMessageConverter );
        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

		HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.MULTIPART_FORM_DATA);
        header.setContentDispositionFormData("file", filename);
		
        HttpEntity<MultiValueMap<String, Object>> httpEntity = new HttpEntity<MultiValueMap<String, Object>>(parts, header);
        
		ResponseEntity<SingleMediaFileResponse> responseEntity = restTemplate.exchange(mediaStoreURL+"/file/upload", HttpMethod.POST, httpEntity, SingleMediaFileResponse.class);
		
		if(responseEntity!=null){
			SingleMediaFileResponse response = responseEntity.getBody();
			if(response.isSuccess()){
				MediaFile mfile = response.getMediafile();
				
				return mfile;
			}
		}
		
		return null;
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public String getMediaStoreURL() {
		return mediaStoreURL;
	}

	public void setMediaStoreURL(String mediaStoreURL) {
		this.mediaStoreURL = mediaStoreURL;
	}

	
}
