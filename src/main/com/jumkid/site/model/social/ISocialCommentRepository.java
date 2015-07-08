package com.jumkid.site.model.social;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ISocialCommentRepository {

    public String getSite();
		
	public SocialComment findById(String uuid, String site);
	
	public Page<SocialComment> findByModuleReference(String module, String moduleRefId, String site, Pageable pager);
	
	public Page<SocialComment> findByText(String keyword, String site, Pageable pager);
	
	public SocialComment save(SocialComment socialComment);
	
	public void remove(SocialComment socialComment);

	public void remove(String uuid, String site);
	
}
