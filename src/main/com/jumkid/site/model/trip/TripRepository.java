package com.jumkid.site.model.trip;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.Query;
import org.springframework.data.solr.core.query.SimpleQuery;

import com.jumkid.base.util.DateUtil;
import com.jumkid.site.search.FileSearchRepository;

public class TripRepository extends FileSearchRepository<Trip> implements ITripRepository{

	@Override
	public Page<Trip> findByDepartureDate(Date departureDate, Pageable pager,
			String scope, String site) {
		
		site = (site==null) ? this.getSite() : site;
		
		Query query = new SimpleQuery(new Criteria("site").is(site))
						.addCriteria(new Criteria("departure_dt").is(departureDate));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, Trip.class);
	}

	@Override
	public Page<Trip> findSinceToday(Integer numOfDays, Pageable pager,
			String scope, String site) {
		
		site = (site==null) ? this.getSite() : site;
		
		Date today = new Date();
		Date futureDate = DateUtil.getAfterDate(numOfDays);
		
		Query query = new SimpleQuery(new Criteria("site").is(site))
							.addCriteria(new Criteria("departure_dt").between(today, futureDate));
		
		query = applyPermission(query, scope);
		
		if(pager!=null) {
			query.setPageRequest(pager);
		}
		query.addSort( sortOrder );
		
		return getSolrOperations().queryForPage(query, Trip.class);
	}	
	
}
