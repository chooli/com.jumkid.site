package com.jumkid.site.model.flyer;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;
import com.jumkid.site.model.product.Product;

public class Flyer extends MediaFile {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8436628681173482214L;

	@Field("featured_pic_s")
	private String featuredPic;
		
	@Field("style_s")
	private String style;
	
	@Field("startdate_dt")
	private Date startDate;
	
	@Field("enddate_dt")
	private Date endDate;
	
	@Field("ref_product_ss")
	private String[] refProducts;
	
	private List<Product> products;

	public String getFeaturedPic() {
		return featuredPic;
	}

	public void setFeaturedPic(String featuredPic) {
		this.featuredPic = featuredPic;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String[] getRefProducts() {
		return refProducts;
	}

	public void setRefProducts(String[] refProducts) {
		this.refProducts = refProducts;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	public void addProduct(Product product){
		if(products==null){
			products = new ArrayList<Product>();
		}
		products.add(product);
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
}
