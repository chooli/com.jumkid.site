package com.jumkid.site.model.social;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.Query;
import org.springframework.data.solr.core.query.SimpleQuery;
import org.springframework.data.solr.repository.support.SimpleSolrRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import com.jumkid.base.rest.security.SecureUserDetailsService;

public class SocialCommentRepository extends SimpleSolrRepository<SocialComment, String>
								implements ISocialCommentRepository {
	
	protected final Log logger = LogFactory.getLog(this.getClass());	

	private SecureUserDetailsService secureUserDetailsService;
	
	private String site;
	
	private static final Sort sortOrder = new Sort(Sort.Direction.ASC, "created_on");		
		
	public SocialCommentRepository(){
		this.setIdFieldName("uuid");
	}

	@Override
	public SocialComment findById(String uuid, String _site) {
		_site = (_site==null) ? this.getSite() : _site;

		Query query = new SimpleQuery(new Criteria(this.getIdFieldName()).is(uuid))
							.addCriteria(new Criteria("site").is(_site));
		
		if(!isIgnoreActivated()) query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
			
		return getSolrOperations().queryForObject(query, this.getEntityClass());
	}
	
	@Override
	public Page<SocialComment> findByModuleReference(String module,
			String moduleRefId, String _site, Pageable pager) {
		
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(new Criteria("module_ref_id").is(moduleRefId))
							.addCriteria(new Criteria("module").is(module))
							.addCriteria(new Criteria("site").is(_site));
		
		if(!isIgnoreActivated()) query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, this.getEntityClass());
	}

	@Override
	public Page<SocialComment> findByText(String keyword, String _site,
			Pageable pager) {
		_site = (_site==null) ? this.getSite() : _site;
		
		Query query = new SimpleQuery(keyword)
							.addCriteria(new Criteria("site").is(_site));
		
		
		if(!isIgnoreActivated()) query.addCriteria(new Criteria("activated").is(Boolean.TRUE));
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, this.getEntityClass());
	}

	@SuppressWarnings("unchecked")
	@Override
	public SocialComment save(SocialComment socialComment) {
		this.checkSite(socialComment);
		
		if(socialComment!=null){
			return super.save(socialComment);
		}
    	return null;
	}

	@Override
	public void remove(SocialComment socialComment) {
		this.checkSite(socialComment);
		
		if(socialComment!=null){
			delete(socialComment);
		}
	}

	@Override
	public void remove(String uuid, String _site) {
		if(uuid==null) return;
		
		SocialComment socialComment = this.findById(uuid, _site);
		
		if(socialComment!=null){
			this.remove(socialComment);
		}
	}
	
	private synchronized void checkSite(SocialComment socialComment){
		if(socialComment.getSite()==null || socialComment.getSite().isEmpty()){
			socialComment.setSite(this.getSite());
		}
	}
	
	private boolean isIgnoreActivated(){
		try{
			org.springframework.security.core.userdetails.User _user = (org.springframework.security.core.userdetails.User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = _user.getUsername();
			for(GrantedAuthority authority:secureUserDetailsService.loadUserByUsername(username).getAuthorities()){
				if("ROLE_ADMIN".equals(authority.getAuthority()) || 
						"ROLE_USER".equals(authority.getAuthority())) return true;
			}
		}catch(Exception e){
			logger.error("failed to get user authority "+e.getMessage());
		}
		
		return false;
	}

	public SecureUserDetailsService getSecureUserDetailsService() {
		return secureUserDetailsService;
	}

	public void setSecureUserDetailsService(SecureUserDetailsService secureUserDetailsService) {
		this.secureUserDetailsService = secureUserDetailsService;
	}

	public void setSite(String site) {
		this.site = site;
	}
	
	@Override
	public String getSite() {
		return this.site;
	}

}
