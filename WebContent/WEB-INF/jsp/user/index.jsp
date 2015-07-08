<!DOCTYPE html>
<%@ page contentType="text/html;charset=utf-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<c:set var="contextUrl" scope="request" value="${pageContext.servletContext.contextPath}"/>
<html>

    <head>
        <title>SiteStory - workspace</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Jumkid Innovation" />
        <meta name="keywords" content="Jumkid Innovation" />
        
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/styles/admin-blue.min.css" media="screen"/>
        
        <script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-1.11.2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-ui-1.11.2/jquery-ui.min.css" media="screen"/>
    	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-ui-1.11.2/jquery-ui.min.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/select2/select2.css" media="screen"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/select2/select2.min.js"></script>

		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember-template-compiler.js"></script> 
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember.min.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember-data.js"></script>
   		
   		<!-- 3th party libs  -->
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-number/jquery.number.min.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/pdfobject.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/video-js/video.js"></script>
   		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/video-js/video-js.min.css" media="screen"/>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/prettify/prettify.js"></script>
   		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/prettify/prettify.css" media="screen"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/ckeditor/ckeditor.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/moment-with-locales.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/pikaday/pikaday.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/pikaday/pikaday.css" media="screen"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/print-preview/jquery.print-preview.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/print-preview/css/print-preview.css" media="screen"/>
   		
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/locale/en.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/core.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/helpers/helpers.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/templates.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/controllers.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/components.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/app.js"></script>
   		        
      
      	<script>
	  		App.ready = function() {
  				App.DataAccess.setup("${pageContext.request.contextPath}", "", "<sec:authentication property="principal.username"/>");
	  		}
  			
  		</script>
		
    </head>

<body>

<script type="text/x-handlebars">
<div>
    <!--  Top main bar -->
    <header id="header">
        <div id="logo_tab">&nbsp;</div>
        <div id="dynamic_container">{{dialog-widget isConfirm=isConfirm callback=confirmCallback confirmMessage=confirmMessage}}{{media-enlarge-viewer}}{{top-waiting-drawer isWaiting=isWaiting}}</div>
        {{logout-button SYSLang=SYSLang}}
		<div id="session_user_panel">{{user-avatar "<sec:authentication property="principal.username"/>" 36}}</div>
    </header>
	
	<div id="main_wrapper">
  		
  		{{navigation-menu property="nav-menu" menuItems=menuItems selectedMenu=selectedMenu}}
			
        <div id="main_panel">
        	<!-- main panel -->
        	{{outlet}}
        </div>
	   
	</div>	    
	
	<footer id="footer">
		{{copyright}}
    </footer>

</div>
</script>

</body>

</html>
 