<!DOCTYPE html>
<%@ page contentType="text/html;charset=utf-8" language="java" %>
<html>

    <head>
        <title>SiteStory - User Login</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Jumkid Innovation" />
        <meta name="keywords" content="Jumkid Innovation" />
        
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/styles/admin-blue.min.css" />
        
        <script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/jquery/jquery-1.11.2.min.js"></script>
    		 
    	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember-template-compiler.js"></script>  		   		
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember.min.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/3pty-libs/emberjs/ember-data.js"></script>
   		   		   		
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/locale/en.js"></script>   		
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/core.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/templates.js"></script>
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/login-app.js"></script>
      
      	<script>
  		<!--

	  		App.ready = function() {
				App.DataAccess.setup("${pageContext.request.contextPath}", "");
	  		}
	  		
  		-->
  		</script>
		
    </head>

<body>

<script type="text/x-handlebars">
<div>
    <!--  Top main bar -->
    <header id="header">
        <div id="logo_tab">&nbsp;</div>
        <div id="dynamic_container">&nbsp;</div>
    </header>
	
	<div id="main_wrapper">

        <div id="main_panel">
        	<!-- login template -->
        	{{outlet}}
			<!-- login template -->
        </div>
	   
	</div>	    
	
	
	<footer id="footer">
	{{copyright}}
    </footer>
</div>
</script>

</body>

</html>
 