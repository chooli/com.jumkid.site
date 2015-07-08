package com.jumkid.site.model.trip;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.jumkid.site.search.IFileSearchRepository;

public interface ITripRepository extends IFileSearchRepository<Trip>{

	public Page<Trip> findByDepartureDate(Date departureDate, Pageable pager, String scope, String site);
	
	public Page<Trip> findSinceToday(Integer numOfDays, Pageable pager, String scope, String site);
	
}
