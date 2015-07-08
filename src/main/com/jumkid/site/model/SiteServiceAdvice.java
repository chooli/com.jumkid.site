package com.jumkid.site.model;

import java.lang.reflect.Method;

import org.springframework.aop.AfterReturningAdvice;
import org.springframework.aop.MethodBeforeAdvice;

import com.jumkid.base.model.Command;
import com.jumkid.base.model.CommonServiceAdvice;

public class SiteServiceAdvice extends CommonServiceAdvice 
							implements AfterReturningAdvice, MethodBeforeAdvice{

	@Override
	public void before(Method method, Object[] args, Object target)
			throws Throwable {
		try{
			Command cmd = (Command)args[0];
			
			if( "blogManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "blog", null);				
			}else
			if( "contactManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "contact", null);				
			}else
			if( "fileManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "mediafile", null);				
			}else
			if( "albumManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "album", null);				
			}else
			if( "flyerManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "flyer", null);				
			}else
			if( "tripManager".equals(cmd.getManager()) ){
				super.doBefore(cmd, "trip", null);				
			}
			
		}catch(Exception e){
			logger.error("failed to proccess before advice "+e.getMessage());
		}
		
	}

	@Override
	public void afterReturning(Object returnValue, Method method,
			Object[] args, Object target) throws Throwable {
		
		try{
			Command cmd = (Command)returnValue;
			
			if( "blogManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "blog", null);
			}else
			if( "contactManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "contact", null);				
			}else
			if( "fileManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "mediafile", null);				
			}else
			if( "albumManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "album", null);				
			}else
			if( "flyerManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "flyer", null);				
			}else
			if( "tripManager".equals(cmd.getManager()) ){
				super.doAfterReturning(cmd, "trip", null);				
			}
			
			
		}catch(Exception e){
			logger.error("failed to proccess afterreturning advice "+e.getMessage());
		}
		
	}

	
	
}
