package com.jumkid.site.model.trip;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;
import com.jumkid.site.model.itinerary.Itinerary;

public class Trip extends MediaFile{

	/**
	 * 
	 */
	private static final long serialVersionUID = -102188852199058072L;
	
	@Field("destinations_txt")
	public String[] destinations;
	
	@Field("departure_dt")
	private Date departureDate;
	
	@Field("return_dt")
	private Date returnDate;
	
	@Field("adults_i")
	private Integer numOfAdult;
	
	@Field("children_i")
	private Integer numOfChild;
	
	@Field("duration_i")
	private Integer duration;
	
	@Field("ref_itinerary_ss")
	private String[] refItineraries;
	
	private List<Itinerary> itineraries;
	
	@Field("blogs_ss")
	private String[] blogs;
	
	@Field("albums_ss")
	private String[] albums;

	public String[] getDestinations() {
		return destinations;
	}

	public void setDestinations(String[] destinations) {
		this.destinations = destinations;
	}

	public Date getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(Date departureDate) {
		this.departureDate = departureDate;
	}

	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public Integer getNumOfAdult() {
		return numOfAdult;
	}

	public void setNumOfAdult(Integer numOfAdult) {
		this.numOfAdult = numOfAdult;
	}

	public Integer getNumOfChild() {
		return numOfChild;
	}

	public void setNumOfChild(Integer numOfChild) {
		this.numOfChild = numOfChild;
	}

	public String[] getRefItineraries() {
		return refItineraries;
	}

	public void setRefItineraries(String[] refItineraries) {
		this.refItineraries = refItineraries;
	}

	public String[] getBlogs() {
		return blogs;
	}

	public void setBlogs(String[] blogs) {
		this.blogs = blogs;
	}

	public String[] getAlbums() {
		return albums;
	}

	public void setAlbums(String[] albums) {
		this.albums = albums;
	}

	public List<Itinerary> getItineraries() {
		return itineraries;
	}

	public void setItineraries(List<Itinerary> itineraries) {
		this.itineraries = itineraries;
	}
	
	public void addItinerary(Itinerary itinerary){
		if(itineraries==null){
			itineraries = new ArrayList<Itinerary>();
		}
		itineraries.add(itinerary);
	}
		
}
