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
 * 1.0        Dec2013      chooli      creation
 * 
 *
 */

import java.sql.Timestamp;
import java.util.Calendar;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.FacetOptions;
import org.springframework.data.solr.core.query.FacetQuery;
import org.springframework.data.solr.core.query.Query;
import org.springframework.data.solr.core.query.SimpleFacetQuery;
import org.springframework.data.solr.core.query.SimpleQuery;
import org.springframework.data.solr.core.query.result.FacetPage;
import org.springframework.data.solr.repository.support.SimpleSolrRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import com.jumkid.base.rest.security.SecureUserDetailsService;
import com.jumkid.base.util.Constants;
import com.jumkid.site.model.file.MediaFile;


public class FileSearchRepository<T> extends SimpleSolrRepository<T, String> 
									 implements IFileSearchRepository<T> {
		
	protected final Log logger = LogFactory.getLog(this.getClass());	

	private SecureUserDetailsService secureUserDetailsService;
	
	private String site;
	
	protected static final Sort sortOrder = new Sort(Sort.Direction.DESC, "created_on");		
		
	public FileSearchRepository(){
		this.setIdFieldName("uuid");
	}
	
	@Override
	public synchronized T findById(String uuid, String _site, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;

		Query query = new SimpleQuery(new Criteria(this.getIdFieldName()).is(uuid))
							.addCriteria(new Criteria("site").is(_site));
		
		query = applyPermission(query, scope);
			
		return getSolrOperations().queryForObject(query, entityClass);
	}
	
	@Override
	public synchronized T findByFilename(String filename, String _site, String module, String scope, Class<T> entityClass) {
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("filename").is(filename))
									.addCriteria(new Criteria("module").is(module))
									.addCriteria(new Criteria("site").is(_site));
		
		query = applyPermission(query, scope);
		
		return getSolrOperations().queryForObject(query, entityClass);
	}

	@Override
	public synchronized Page<T> findByText(String keyword, String _site, String module, 
			Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(keyword)
							.addCriteria(new Criteria("module").is(module))
							.addCriteria(new Criteria("site").is(_site));
		
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, entityClass);
	}

	@Override
	public synchronized Page<T> findByTitle(String title, String _site, String module, 
			Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("title").is(title))
							.addCriteria(new Criteria("module").is(module))
							.addCriteria(new Criteria("site").is(_site));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, entityClass);
	}

	@Override
	public synchronized Page<T> findByContent(String keyword, String _site, String module, 
			Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("content").contains(keyword))
							.addCriteria(new Criteria("module").is(module))
							.addCriteria(new Criteria("site").is(_site));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, entityClass);	
	}
	
	@Override
	public synchronized Page<T> findBySite(String _site, String module, 
			Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("site").is(_site))
						.addCriteria(new Criteria("module").is(module));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, entityClass);	
	}
	


	@Override
	public synchronized Page<T> findByModuleAndModuleRefId(String module,
			String moduleRefId, String _site, Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("module").is(module))
					.addCriteria(new Criteria("module_ref_id").is(moduleRefId))
					.addCriteria(new Criteria("site").is(_site));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, entityClass);
	}
	

	@Override
	public synchronized FacetPage<T> findByFacetField(String prefix, String fieldName, String _site, 
			String module, Pageable pager, String scope, Class<T> entityClass) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		FacetOptions options = new FacetOptions().addFacetOnField(fieldName);
		if(prefix!=null && !prefix.isEmpty()) options.setFacetPrefix(prefix);
		
		FacetQuery query = new SimpleFacetQuery( new Criteria(Criteria.WILDCARD).expression(Criteria.WILDCARD) )
		  						.setFacetOptions( options )
		  						.addCriteria(new Criteria("module").is(module))
		  						.addCriteria(new Criteria("site").is(_site));

		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		
		FacetPage<T> page = getSolrOperations().queryForFacetPage( query, entityClass );
		
		return page;
	}
	
	@Override
    public T saveSearch(T t){
		
		this.checkSite((MediaFile)t);
		
		if(t!=null){
			this.setCreatedInfo((MediaFile)t);
			return save(t);
		}
    	return null;
    }
	
	@Override
	public void remove(T t){
		
		this.checkSite((MediaFile)t);
		
		if(t!=null){
			delete(t);
		}
	}
	
	@Override
	public void remove(String uuid, String _site, Class<T> entityClass){
		if(uuid==null) return;
		
		T t = this.findById(uuid, _site, Constants.PRIVATE, entityClass);
		
		if(t!=null){
			this.remove(t);
		}
	}
	
	private synchronized void checkSite(MediaFile mfile){
		if(mfile.getSite()==null || mfile.getSite().isEmpty()){
			mfile.setSite(this.getSite());
		}
	}	
	
	protected Query applyPermission(Query query, String scope){
		try{			
			if(Constants.PUBLIC.equals(scope)){
				if(!isAdminUser()){
					query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
				}
			}else{
				if(!isAdminUser()){
					org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
					String username = _user.getUsername();
					//show user owned records
					query.addCriteria(new Criteria("created_by").is(username).or("share_users").is(username));
				}
			}
						
		}catch(Exception e){
			query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
		}
		
		return query;
	}
	
	private FacetQuery applyPermission(FacetQuery query, String scope){	
		try{
			if(Constants.PUBLIC.equals(scope)){
				if(!isAdminUser()){
					query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
				}
				
			}else{
				if(!isAdminUser()){
					org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
					String username = _user.getUsername();
					//show user owned records
					query.addCriteria(new Criteria("created_by").is(username).or("share_users").is(username));
				}
			}			
		}catch(Exception e){
			query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
		}
		
		return query;
	}
	
	protected void setCreatedInfo(MediaFile mfile){
		String username;
		try{
			org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			username = _user.getUsername();
		}catch(Exception e){
			username = "anonymous";
		}
		
		if(mfile.getCreatedBy()==null || mfile.getCreatedBy().isEmpty()){
			mfile.setCreatedBy(username);
			mfile.setCreatedOn( new Timestamp(Calendar.getInstance().getTimeInMillis()) );
		}
		
	}
	
	private boolean isAdminUser(){
		try{
			org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			//show deactivated records for role_admin and role_user
			String username = _user.getUsername();
			for(GrantedAuthority authority:secureUserDetailsService.loadUserByUsername(username).getAuthorities()){
				if("ROLE_ADMIN".equals(authority.getAuthority())){
					return true;
				}
			}
		}catch(Exception e){
			//void
		}
				
		return false;
	}

	@Override
	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public SecureUserDetailsService getSecureUserDetailsService() {
		return secureUserDetailsService;
	}

	public void setSecureUserDetailsService(
			SecureUserDetailsService secureUserDetailsService) {
		this.secureUserDetailsService = secureUserDetailsService;
	}
	

}
