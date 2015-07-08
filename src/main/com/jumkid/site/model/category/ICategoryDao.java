package com.jumkid.site.model.category;

import com.jumkid.base.model.ICommonBeanDao;

public interface ICategoryDao extends ICommonBeanDao {

	/**
	 * 
	 * @param name
	 * @return
	 */
    public Category loadByName(String name);
    
    /**
     * 
     * @param route
     * @return
     */
    public Category loadByRoute(String route);
    
}
