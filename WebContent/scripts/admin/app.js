/**
 * Created by Chooli on 2/3/2015.
 */
App.AdmintoolsRoute = Ember.Route.extend({

    setupController: function(controller, _model){
        controller.send('switchMenu', "admintools");
        controller.send('launch', 'fixturedata');
    }

});
App.AlbumRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "albums");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('album');
            controller.set('model', _model);
        }

    },

    actions: {

        willTransition: function(transition) {
            //remove observer
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});
App.AlbumsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "albums");
        controller.send('search');
    }

});
App.Router.map(function(){
	
	//this is a default route so it is optional
    this.route(App.API.ROUTE.INDEX, { path: '/' });

    this.resource(App.API.ROUTE.ALBUMS);
    this.resource(App.API.ROUTE.ALBUM);
    this.resource(App.API.ROUTE.BLOGS);
    this.resource(App.API.ROUTE.BLOG);
    this.resource(App.API.ROUTE.FLYER);
    this.resource(App.API.ROUTE.FLYERS);
    this.resource(App.API.ROUTE.TRIP);
    this.resource(App.API.ROUTE.TRIPS);
    this.resource(App.API.ROUTE.PRODUCT);
    this.resource(App.API.ROUTE.CONTACTS);
    this.resource(App.API.ROUTE.USER);
    this.resource(App.API.ROUTE.FRIENDS);

    this.route(App.API.ROUTE.ADMINTOOLS, { path: '/admintools' }, function(){
        this.resource(App.API.ROUTE.FIXTUREDATA);
    });
    
});
App.BlogRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "blogs");

        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('blog');
            controller.set('model', _model);
        }

    },

    actions: {

        willTransition: function(transition) {
            //remove observer
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});
App.BlogsRoute = Ember.Route.extend({

	setupController: function(controller){
		controller.send('switchMenu', "blogs");

		controller.send('search');
	}
    
});
App.ContactsRoute = Ember.Route.extend({

	setupController: function(controller){
		controller.send('switchMenu', "contacts");

		if(!controller.get('model')){
			var _model = App.ModuleManager.getModel('contact');
			controller.set('model', _model);
		}
	}
    
});
/**
 * Created by Chooli on 2/3/2015.
 */
App.FixturedataRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "admintools");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('fixturedata');
            controller.set('model', _model);
        }
        controller.send('search');
    }

});
/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyerRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");

        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('flyer');
            controller.set('model', _model);
        }

        if(controller.get('selectedproduct')){
            controller.send('loadProduct', controller.get('selectedproduct'));
        }

    },

    actions: {

        willTransition: function(transition) {
            //remove observer
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});

/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyersRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");
        controller.send('search');
    }

});

/**
 * Created by Chooli on 2015-03-05.
 */
App.FriendsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "friends");
        controller.send('search');
    }

});

App.IndexRoute = Ember.Route.extend({
	
    setupController: function(controller, _model){
        controller.send('switchMenu', "index");
    	//load recent updates
		controller.send('initDashboard');
    }

});
/**
 * Created by Chooli on 1/18/2015.
 */
App.ProductRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('product');
            controller.set('model', _model);
        }

    }

});

App.ApplicationRoute = Ember.Route.extend({

	setupController: function(controller){

		controller.set('model', App.PROFILE);
		controller.set('currentUser', App.DataAccess.currentUser);
		App.DataAccess.getReq(App.API.USER.GET.ROLE)
			.then(function(data){
				if(data.success){
					switch(data.role) {
						case "ROLE_ADMIN":
							Ember.set(App.PROFILE, 'menuItems',App.RoleAdminMenus);
							break;
						case "ROLE_AGENT":
							Ember.set(App.PROFILE, 'menuItems',App.RoleAgentMenus);
							break;
						default:
							Ember.set(App.PROFILE, 'menuItems',App.RoleUserMenus);
					}
					controller.set('currentRole', data.role);

				}
			});

	},

    actions: {

		switchMenu: function(route){
			Ember.set(this.controllerFor('application').get('model'), 'selectedMenu', route);
		},

		toggleWaiting: function () {
			if(this.controllerFor('application').isWaiting) this.controllerFor('application').set('isWaiting', false);
			else this.controllerFor('application').set('isWaiting', true);
		},

		/**
		 * Submit lock for duplicate submit request by the user
		 */
		checkinProgress: function(){
			if(!this.controllerFor('application')._isInProgress){
				this.send('toggleWaiting');
				this.controllerFor('application').set('_isInProgress', true);
				return true;
			}
			else{
				return false;
			}
		},

		/**
		 * Submit unlock for duplicate submit request by the user
		 */
		checkoutProgress: function(){
			if(this.controllerFor('application')._isInProgress){
				this.send('toggleWaiting');
				this.controllerFor('application').set('_isInProgress', false);
			}
		},

		confirm: function (callback, msg) {
			this.controllerFor('application').set('confirmMessage', msg);
			this.controllerFor('application').set('confirmCallback', callback);
			this.controllerFor('application').set('isConfirm', true);
			this.send('checkinProgress');
		},

		print: function(){
			Ember.$.printPreview.loadPrintPreview();
		},

		sendMail: function(callback){
			this.controllerFor('application').set('mailerCallback', callback);
			this.controllerFor('application').set('hideMailer', false);
		},

		sendMailDone: function(){
			this.controllerFor('application').set('hideMailer', true);
		}
    	
    	
    }

});
App.SearchRoute = Ember.Route.extend({
	
	setupController: function(controller, _model){
        console.log('init SearchRoute');
        //controller.set('model', _model);
    }
    
});
/**
 * Created by Chooli on 1/13/2015.
 */
App.TripRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "trips");

        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('trip');
            controller.set('model', _model);
        }

        Ember.run.schedule('afterRender', this, function () {
            // Set up the number formatting.
            Ember.$('input[name=numOfAdult]').number( true, 0 );
            Ember.$('input[name=numOfChild]').number( true, 0 );
        });

    },

    actions: {

        willTransition: function(transition) {
            //hide mailer
            this.controller.set('hideMailer', true);
            //remove observers
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});

/**
 * Created by Chooli on 1/13/2015.
 */
App.TripsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "trips");
        controller.send('search');
    }

});

App.UserRoute = Ember.Route.extend({
	
	setupController: function(controller, _model){
        controller.send('switchMenu', "user");
        controller.send('editEntity');

    }
    
});