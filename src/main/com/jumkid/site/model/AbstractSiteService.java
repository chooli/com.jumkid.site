package com.jumkid.site.model;
/* 
 * This software is written by Jumkid and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 *
 * (c)2013 Jumkid All rights reserved.
 *
 * VERSION   | DATE      | DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 3.0        Dec2014      chooli      creation
 * 
 *
 */

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.context.SecurityContextHolder;

import com.jumkid.base.model.AbstractCommandService;
import com.jumkid.base.model.IAbstractBeanValidator;
import com.jumkid.site.model.file.IFileStorageRepository;
import com.jumkid.site.search.IFileSearchRepository;

public class AbstractSiteService<T> extends AbstractCommandService{
	
	protected final Log logger = LogFactory.getLog(this.getClass());
		
	protected IFileSearchRepository<T> fileSearchRepository;
	
	protected IFileStorageRepository<T> fileStorageRepository;
	
	protected IAbstractBeanValidator abstractBeanValidator;
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void deleteMediaFile(String uuid, Class entityClass){
		T mfile = fileSearchRepository.findById(uuid, this.site, null, entityClass);
		if(mfile!=null){
			fileStorageRepository.deleteFile(mfile);
			fileSearchRepository.remove(uuid, this.site, entityClass);
		}
	}
	
	public IFileSearchRepository<T> getFileSearchRepository() {
		return fileSearchRepository;
	}

	public void setFileSearchRepository(
			IFileSearchRepository<T> fileSearchRepository) {
		this.fileSearchRepository = fileSearchRepository;
	}
	
	public IFileStorageRepository<T> getFileStorageRepository() {
		return fileStorageRepository;
	}

	public void setFileStorageRepository(
			IFileStorageRepository<T> fileStorageRepository) {
		this.fileStorageRepository = fileStorageRepository;
	}

	protected String getContextUserName(){
		org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return _user.getUsername();
	}

	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}

	public void setAbstractBeanValidator(IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}
	
}
