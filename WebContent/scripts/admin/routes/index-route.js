App.IndexRoute = Ember.Route.extend({
	
    setupController: function(controller, _model){
        controller.send('switchMenu', "index");
    	//load recent updates
		controller.send('initDashboard');
    }

});