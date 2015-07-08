package com.jumkid.site.model.product;

import org.apache.solr.client.solrj.beans.Field;

import com.jumkid.site.model.file.MediaFile;

public class Product extends MediaFile {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2809213444577312505L;
	
	@Field("introduction_t")
	private String introduction;
	
	@Field("product_code_s")
	private String productCode;
	
	@Field("reference_code_s")
	private String referenceCode;
	
	@Field("regular_price_f")
	private Float regularPrice;
	
	@Field("sale_price_f")
	private Float salePrice;
	
	@Field("discount_rate_f")
	private Float discountRate;
	
	@Field("currency_s")
	private String currency;
	
	@Field("attribute_name_txt")
	private String[] attributeNames;
	
	@Field("attribute_value_txt")
	private String[] attributeValues;

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getReferenceCode() {
		return referenceCode;
	}

	public void setReferenceCode(String referenceCode) {
		this.referenceCode = referenceCode;
	}

	public Float getRegularPrice() {
		return regularPrice;
	}

	public void setRegularPrice(Float regularPrice) {
		this.regularPrice = regularPrice;
	}

	public Float getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(Float salePrice) {
		this.salePrice = salePrice;
	}

	public Float getDiscountRate() {
		return discountRate;
	}

	public void setDiscountRate(Float discountRate) {
		this.discountRate = discountRate;
	}

	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String[] getAttributeNames() {
		return attributeNames;
	}

	public void setAttributeNames(String[] attributeNames) {
		this.attributeNames = attributeNames;
	}

	public String[] getAttributeValues() {
		return attributeValues;
	}

	public void setAttributeValues(String[] attributeValues) {
		this.attributeValues = attributeValues;
	}

}
