<!DOCTYPE html>
<%@ page contentType="text/html;charset=utf-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:useBean id="itineraryDate" class="java.util.Date"/>
<c:set var="contextUrl" scope="request" value="${pageContext.servletContext.contextPath}"/>
<c:set var="module" scope="request" value="${module}"/>
<c:set var="trip" scope="request" value="${trip}"/>
<c:set var="itineraries" scope="request" value="${itineraries}"/>
<html>

    <head>
        <title>SiteStory - </title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Jumkid Innovation" />
        <meta name="keywords" content="Jumkid Innovation" />
        
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/styles/admin-blue.min.css" />
        
        <script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-1.11.2.min.js"></script>
    	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-ui-1.11.2/jquery-ui.min.css" media="screen"/>
    	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-ui-1.11.2/jquery-ui.min.js"></script>
    	
    	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/print-preview/jquery.print-preview.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/print-preview/css/print-preview.css" media="screen"/>
		
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/locale/en.js"></script>   		

      
      	<script>
  		<!--

  		$(document).ready(function () {	
  			  			
  			 $('#print-btn').on('click', function(el){
  				$.printPreview.loadPrintPreview();
  			 }) 			
  			
  		});
	  		
  		-->
  		</script>
		
    </head>

<body>

<div>
	
	<div class="di">&nbsp;</div>
	
	<div id="main_wrapper">
		
        <div id="main_panel">
        
        	<img src="../../images/admin/logo-top-bar-black.png" /> &nbsp; <img src="<c:out value="${contextUrl}"/>/user/avatar/<sec:authentication property="principal.username"/>" style="margin-left:18px;border-radius: 150px;-webkit-border-radius: 150px;-moz-border-radius: 150px;height:46px;width:46px;"/> <sec:authentication property="principal.username"/> <button id="print-btn">打印</button> &nbsp; 编号：<c:out value="${requestScope.entityId}"/>	
        
        	<div class="di">&nbsp;</div>
        	        
        	<c:choose>
        		<c:when test="${module == 'trip'}">
        			<div><h2><c:out value="${trip.title}"/></h2></div>
        			<div>时间：从 <fmt:formatDate pattern="yyyy-MM-dd" value="${trip.departureDate}" /> 到 <fmt:formatDate pattern="yyyy-MM-dd" value="${trip.returnDate}" />，共 <c:out value="${trip.duration}"/> 天</div>			
        			<div>大人：<c:out value="${trip.numOfAdult}"/> 位 <c:if test="${not empty trip.numOfChild}">小孩 <c:out value="${trip.numOfChild}"/> 位</c:if></div>
        		
        			<div class="di">&nbsp;</div>
        		
        		    <div>
        		    	<c:set var="departureDate" value="${trip.departureDate}"/>
        		    	<c:forEach items="${itineraries}" var="itinerary" varStatus="loop">
        		    		<jsp:setProperty name="itineraryDate" property="time" value="${departureDate.time + 60*60*24*1000*(loop.index)}" />
        		    		<div>
        		    			<h3>第 <c:out value="${loop.index + 1}"/> 天 </h3> 
        		    			日期：<fmt:formatDate pattern="yyyy-MM-dd" value="${itineraryDate}" /> <fmt:formatDate pattern="EE" value="${itineraryDate}" />
        		    			<hr/>
        		    			
        		    			<div class="di">&nbsp;</div>
        		    			
        		    			<c:set var="attributeValues" value="${itinerary.attributeValues}"/>
        		    			<c:set var="attributeTimes" value="${itinerary.attributeTimes}"/>
        		    			<c:forEach items="${itinerary.attributeTypes}" var="attributeType" varStatus="loop">
        		    				<img src="../../images/admin/icon-itinerary-<c:out value="${attributeType}"/>.png" style="vertical-align: middle;" />
        		    				<fmt:parseDate value="${attributeTimes[loop.index]}" var="attributeTime" pattern="HH:mm" />
        		    				<strong><fmt:formatDate pattern="hh:mm a" value="${attributeTime}" /></strong>
        		    				<c:out value="${attributeValues[loop.index]}"/>
        		    				<div class="di">&nbsp;</div>
        		    				
        		    			</c:forEach>
        		    			
        		    			<div class="di">&nbsp;</div>
        		    			
        		    		</div>
        		    	</c:forEach>
        		    </div>
        		   
        		</c:when>
        	</c:choose>
        	
        	
        	
        	
        </div>
	   	   	
	   
	</div>	    
	
</div>

</body>

</html>
 