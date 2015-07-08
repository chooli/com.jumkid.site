App.Router.map(function(){
    this.resource('apispec');
});

App.ApplicationRoute = Ember.Route.extend({
	
	model: function(){
		
		return App.PROFILE;
		
	}

});

App.IndexRoute = Ember.Route.extend({
	
	redirect: function() {
        this.transitionTo('/apispec');
    }

});

App.ApispecRoute = Ember.Route.extend({

    model: function () {
        return App.DataAccess.getReq(App.API.APISPEC.GET.SPEC);
    },

    dummy: null

});