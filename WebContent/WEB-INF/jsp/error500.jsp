<!DOCTYPE html>
<%@ page contentType="text/html;charset=utf-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:import var="head" url="site/include-style-script.jsp"/>
<c:import var="footer" url="site/include-footer.jsp"/>
<c:import var="head_banner" url="site/include-head-bar.jsp"/>
<html>

	<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>SiteStory - Error Page</title>
	
	<c:out value="${head}" escapeXml="false"/>
	
	</head>

<body>
	
	<div id="basic_wrapper">
	
		<!--  Top main bar -->
		<c:out value="${head_banner}" escapeXml="false"/>
		
		<div id="main_wrapper">
	  					
	        <div id="main_panel">
				<div style="margin: 30px 30px; font-size:21px; color:#898989;">Oops! Our system encounters some error. We are so sorry about that. Please visit other page or submit request to us. We will be very appreciated.</div>
	        </div>
	        	   
		</div>	    
		
		<c:out value="${footer}" escapeXml="false"/>
	
	</div>

</body>

</html>