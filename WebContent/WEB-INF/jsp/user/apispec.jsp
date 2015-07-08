<!DOCTYPE html>
<%@ page contentType="text/html;charset=utf-8" language="java" %>
<html>

    <head>
        <title>SiteStory - API Spec</title>
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
   		<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/admin/apispec-app.js"></script>
        
      	<script>
  		<!--

	  		App.ready = function() {
  				App.DataAccess.set('contextPath', "${pageContext.request.contextPath}");
				App.DataAccess.set('servletPath', "");
				
	  		}
  		
	  		Ember.Handlebars.helper('showMetadata', function(obj) {
	  			var str = "";
		    	for(pro in obj){
		    		str += "<div class='api_item_grid'> <label>" + pro + "</label> <span>" + obj[pro]+"</span></div>";
		    	}
		    	return new Ember.Handlebars.SafeString(str);
	  		});
	  		
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
        <div id="top_horizontal_panel">&nbsp;</div>
    </header>
	
	<div id="main_wrapper">
  		
		{{navigation-menu}}
			
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

<script type="text/x-handlebars" id="apispec">
	<div><h1>API Specification</h1></div>
		{{#each apispec in apispecs}}
		<div class="api_item_block">
			<div><label>module</label><span>{{apispec.module}}</span></div>
			<div><label>URL</label><span>{{App.DataAccess.contextPath}}{{App.DataAccess.servletPath}}{{apispec.url}}</span></div>
			<div><label>format</label><span>{{apispec.format}}</span></div>
			<div><label>action</label><span>{{apispec.action}}</span></div>
			<div><label>input</label><span>{{apispec.input}}</span></div>
			<div><label>output</label><span>{{apispec.output}}</span></div>
			{{#if apispec.object}}<div><label>object fields</label>
				{{showMetadata apispec.object._metadata}}
			</div>{{/if}}
		</div>
		{{/each}}
</script>

<script type="text/x-handlebars" id="components/navigation-menu">
	{{#each menuItem in menuItems}}
		<div {{bind-attr class="menuItem.selected:s-top-tool-menu-focus:s-top-tool-menu"}}
			{{action "menuClick" menuItem }}>{{menuItem.title}}</div>
	{{/each}}
</script>

</body>

</html>
 