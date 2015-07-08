package com.jumkid.site.search;
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
 * 3.0        Dec2013      chooli      creation
 * 
 *
 */
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.solr.core.query.result.FacetPage;

public interface IFileSearchRepository<T>{
	
	public String getSite();
			
	public T findById(String uuid, String _site, String scope, Class<T> entityClass);
	
	public T findByFilename(String filename, String site, String module, String scope, Class<T> entityClass);
	
	public Page<T> findByText(String keyword, String site, String module, 
			Pageable pager, String scope, Class<T> entityClass);
		
	public Page<T> findByTitle(String title, String site, String module, 
			Pageable pager, String scope, Class<T> entityClass);
		
	public Page<T> findByContent(String keyword, String site, String module, 
			Pageable pager, String scope, Class<T> entityClass);
	
	public Page<T> findBySite(String site, String module, 
			Pageable pager, String scope, Class<T> entityClass);
	
	public Page<T> findByModuleAndModuleRefId(String module, String moduleRefId, String site, 
			Pageable pager, String scope, Class<T> entityClass);
				
	
	public FacetPage<T> findByFacetField(String prefix, String fieldName, String site, String module, 
			Pageable pager, String scope, Class<T> entityClass);
	
	public T saveSearch(T t);
	
	public void remove(T t);

	public void remove(String uuid, String site, Class<T> entityClass);
	
}
