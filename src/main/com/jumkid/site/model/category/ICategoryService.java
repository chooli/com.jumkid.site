package com.jumkid.site.model.category;

import javax.servlet.http.HttpServletRequest;

import com.jumkid.base.exception.BeanValidateException;
import com.jumkid.base.model.Command;

public interface ICategoryService {

	/**
     * 
     * @param cmd
     * @return
     * @throws Exception
     */
    public Command execute(Command cmd) throws Exception;
    
    /**
	 * Fill in category properties by given http request
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public Category transformRequestToCategory(HttpServletRequest request) throws BeanValidateException;
}
