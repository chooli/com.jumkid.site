package com.jumkid.site.model.category;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;

import com.jumkid.base.model.AbstractHibernateDAO;

public class CategoryDao extends AbstractHibernateDAO<Category> implements ICategoryDao{

	public CategoryDao() {
		super(Category.class);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Category loadByName(String name) {
		if (name== null) {
            throw new IllegalArgumentException("'name' can not be null");
        }
		try {            
			DetachedCriteria criteria = DetachedCriteria.forClass(Category.class)
					.add(Restrictions.eq("name", name));
			
			List<Category> list = this.findByCriteria(criteria);
			
			final Object entity = (list != null && !list.isEmpty()) ? list.iterator().next() : null;
			Category category = (Category)entity;
	        return category;
	        
        } catch (HibernateException ex) {
            logger.error("failed to load by name "+ex.getMessage());
            return null;
        } 
	}

	@SuppressWarnings("unchecked")
	@Override
	public Category loadByRoute(String route) {
		if (route== null) {
            throw new IllegalArgumentException("'route' can not be null");
        }
		try {            
			DetachedCriteria criteria = DetachedCriteria.forClass(Category.class)
					.add(Restrictions.eq("route", route));
			
			List<Category> list = this.findByCriteria(criteria);
			
			final Object entity = (list != null && !list.isEmpty()) ? list.iterator().next() : null;
			Category category = (Category)entity;
	        return category;
	        
        } catch (HibernateException ex) {
            logger.error("failed to load by route "+ex.getMessage());
            return null;
        } 
	}

}
