App.ContactsRoute = Ember.Route.extend({

	setupController: function(controller){
		controller.send('switchMenu', "contacts");

		if(!controller.get('model')){
			var _model = App.ModuleManager.getModel('contact');
			controller.set('model', _model);
		}
	}
    
});