App.UserRoute = Ember.Route.extend({
	
	setupController: function(controller, _model){
        controller.send('switchMenu', "user");
        controller.send('editEntity');

    }
    
});