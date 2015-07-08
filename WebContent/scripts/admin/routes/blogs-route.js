App.BlogsRoute = Ember.Route.extend({

	setupController: function(controller){
		controller.send('switchMenu', "blogs");

		controller.send('search');
	}
    
});