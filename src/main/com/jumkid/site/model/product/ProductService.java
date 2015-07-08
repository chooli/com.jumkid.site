package com.jumkid.site.model.product;

import java.nio.channels.FileChannel;
import java.text.DecimalFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;



import org.springframework.context.annotation.Scope;

import com.jumkid.base.model.Command;
import com.jumkid.base.util.UUIDGenerator;
import com.jumkid.site.exception.MediaStoreServiceException;
import com.jumkid.site.model.AbstractSiteService;

@Scope("session")
public class ProductService extends AbstractSiteService<Product> implements
		IProductService {

	private final static String MODULE = "product";

	@Override
	public Command execute(Command cmd) throws MediaStoreServiceException {
		try {
			super.execute(cmd);

			if (isManager("productManager")) {

				if (isAction("load")) {
					String uuid = (String) cmd.getParams().get("uuid");
					String scope = (String) cmd.getParams().get("scope");

					Product product = fileSearchRepository.findById(uuid, this.site, scope, Product.class);

					cmd.getResults().put("product", product);
				} else // save file
				if (isAction("save")) {

					Product product = (Product) cmd.getParams().get("product");
					if (product.getUuid() == null) {
						product.setUuid(UUIDGenerator.next());// get unique id
																// for file name
																// for storage
						product.setModule(MODULE);
						product.setCreatedDate(new Date());
						product.setSite(this.site);
						product.setActivated(true);
					}

					if (product.getFilename() == null) {
						product.setFilename(product.getUuid());
					}

					product = this.calculateProduct(product);

					byte[] file = (byte[]) cmd.getParams().get("file");
					// TODO extract meta data and content from office document

					if (file != null) {
						product = fileStorageRepository.saveFile(file, product);
					}

					// index media file for search
					if (product != null && product.getLogicalPath() != null) {
						if ((product = fileSearchRepository.saveSearch(product)) == null)
							cmd.setError("Failed to index entry");
					}

					cmd.getResults().put("product", product);
				} else
				// delete file
				if (isAction("delete")) {
					String uuid = (String) cmd.getParams().get("uuid");
					String scope = (String) cmd.getParams().get("scope");

					if (uuid != null) {
						Product product = fileSearchRepository.findById(uuid,
								this.site, scope, Product.class);
						if (product != null) {
							// delete file from storage
							fileStorageRepository.deleteFile(product);
							// remove from index
							fileSearchRepository.remove(product);

						} else {
							cmd.setError("Failed to retrieve file information");
						}

					}

				} else if (isAction("retrieve")) {
					String uuid = (String) cmd.getParams().get("uuid");
					String filename = (String) cmd.getParams().get("filename");
					String scope = (String) cmd.getParams().get("scope");

					Product product = null;
					if (uuid != null) {
						product = fileSearchRepository
								.findById(uuid, this.site, scope, Product.class);
					} else if (filename != null) {
						product = fileSearchRepository.findByFilename(filename,
								this.site, MODULE, scope, Product.class);
					}
					if (product != null) {

						FileChannel fc = fileStorageRepository.getFile(product);

						cmd.getResults().put("fileChannel", fc);
						cmd.getResults().put("product", product);
					} else {
						cmd.setError("Failed to retrieve file information");
					}

				}

			}

		} catch (Exception e) {
			logger.error("failed to perform " + cmd.getAction() + " in "
					+ cmd.getManager() + " due to " + e.getMessage());
			cmd.setError(e.getLocalizedMessage());
		}

		return cmd;

	}

	@Override
	public Product transformRequestToProduct(HttpServletRequest request)
			throws Exception {
		String uuid = request.getParameter("uuid");
		String scope = request.getParameter("scope");
		Product product;
		if (uuid != null && !uuid.isEmpty()) {
			product = (Product) fileSearchRepository.findById(uuid, this.site, scope, Product.class);

		} else {
			product = new Product();
		}

		// parse request by fields
		product = (Product) this.fillInValueByRequest(product, request);

		product = (Product) this.fillInConcurrencyInfo(product, request);

		return product;
	}

	/**
	 * 
	 * @param opportunity
	 * @return
	 */
	private synchronized Product calculateProduct(Product product) {
		Float regPrice = (product.getRegularPrice() == null) ? 0 : product
				.getRegularPrice();
		Float salePrice = (product.getSalePrice() == null) ? 0 : product
				.getSalePrice();
		Float discountRate = (product.getDiscountRate() == null) ? 0 : product
				.getDiscountRate();

		if (regPrice != null && regPrice != 0) {
			if (salePrice != null && salePrice != 0) {
				if (salePrice < regPrice) {
					discountRate = new Float(Math.round((regPrice - salePrice)
							/ regPrice * 100));
				}
			} else if (discountRate != null && discountRate != 0) {
				salePrice = new Float(regPrice * (1 - discountRate / 100));
			} else {
				salePrice = regPrice;
			}

		} else {
			salePrice = new Float(0);
			discountRate = new Float(0);
		}

		product.setRegularPrice(regPrice);
		DecimalFormat df = new DecimalFormat("##.00");
		product.setSalePrice(Float.valueOf(df.format(salePrice)));
		product.setDiscountRate(discountRate);

		return product;

	}

}
