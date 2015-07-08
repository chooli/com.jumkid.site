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