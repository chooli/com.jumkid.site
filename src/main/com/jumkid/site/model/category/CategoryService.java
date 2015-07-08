package com.jumkid.site.model.category;

import java.util.ConcurrentModificationException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.exception.BeanValidateException;
import com.jumkid.base.model.AbstractCommandService;
import com.jumkid.base.model.Command;
import com.jumkid.base.model.IAbstractBeanValidator;
import com.jumkid.base.util.Constants;

public class CategoryService extends AbstractCommandService implements ICategoryService {
	
	private ICategoryDao categoryDao;
	
	private IAbstractBeanValidator abstractBeanValidator;

	@Override
	public Command execute(Command cmd) throws Exception {
		 super.execute(cmd);
		 
		 try{
			 
			 if (isManager("categorymanager")) {
	                // load category
	                if (isAction("load")) {
	                    Integer id = (Integer)cmd.getParams().get("id");
	                    String name = (String)cmd.getParams().get("name");
	                    String route = (String)cmd.getParams().get("route");
	                    
	                    Category category = null;
	                    if(id!=null){
	                    	category = (Category)categoryDao.load(id);
	                    }else
	                    if(name!=null){
	                    	category = categoryDao.loadByName(name);
	                    }else
	                    if(route!=null){
	                    	category = categoryDao.loadByRoute(route);
	                    }
	                    	                    
	                    cmd.addResults("category", category);
	                
	                }else 
	                if(isAction("list")) {      
		                
		                List<Category> categories = categoryDao.loadAll();
	                	
	                    cmd.addResults("categories", categories);
	                    
	                } else 
	                if(isAction("save")) {
	                
	                	Category category = (Category)cmd.getParams().get("category");
	                    try {                    	
	                        category = saveCategory(category);                    
	                        cmd.addResults("category", category);
	                        
	                    } catch (ConcurrentModificationException cme) { 
	                        cmd.setError(Constants.CMSG_CONCURRENT_MODIFICATION);
	                    } catch (IllegalArgumentException iae) {
	                    	cmd.setError("IllegalArgumentException");
	                    }                
	                } else 
	                if(isAction("delete")) {
	                	
	                    Integer id = (Integer)cmd.getParams().get("id");
	                    try {
	                        categoryDao.remove(id);
	                    } catch (Exception e) {
	                    	logger.error("Failed to remove category "+e.getMessage());
	                        cmd.setError(e.getMessage());    
	                    }            
	                } 
	                
			 }
			 
		 } catch(Exception e){
        	logger.error("failed to perform "+cmd.getAction()+" due to "+e.getMessage());
            cmd.setError(e.getLocalizedMessage());
        }	 
        
        return cmd;
	}

	@Override
	public Category transformRequestToCategory(HttpServletRequest request)
			throws BeanValidateException {
		Category category = (Category)this.transformRequestToBean(request, Category.class, getCategoryDao());
	    
		try{			
			abstractBeanValidator.validate(IAbstractBeanValidator.VTYPE_EMPTY, "name & route", category); 
			
		}catch(BeanValidateException bve) {
			throw new BeanValidateException(bve.getMessage());
		}
    	
    	
    	return category;
	}
	
	/**
	 * 
	 * @param category
	 * @return
	 * @throws ConcurrentModificationException
	 * @throws IllegalArgumentException
	 */
	private Category saveCategory(Category category) throws ConcurrentModificationException,
			IllegalArgumentException {
		
		if (category == null) {
            throw new IllegalArgumentException("'category' can not be null");
        }

        if (category.getId()==null) {
        	category = (Category)categoryDao.create(category);
        } else {            	        	
        	categoryDao.update(category);
        }

        return category; 
	}

	public ICategoryDao getCategoryDao() {
		return categoryDao;
	}

	public void setCategoryDao(ICategoryDao categoryDao) {
		this.categoryDao = categoryDao;
	}

	public IAbstractBeanValidator getAbstractBeanValidator() {
		return abstractBeanValidator;
	}

	public void setAbstractBeanValidator(
			IAbstractBeanValidator abstractBeanValidator) {
		this.abstractBeanValidator = abstractBeanValidator;
	}

}
