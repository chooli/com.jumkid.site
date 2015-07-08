App.Router.map(function(){
    //this is a default route so it is optional
    this.route('index', { path: '/' });

    this.route('login');
    this.route('signup');
});

App.ApplicationRoute = Ember.Route.extend({
	
	model: function(){
		return App.PROFILE;
	}

});

App.ApplicationController = Ember.ObjectController.extend({

    actions: null,

    updateCurrentPath: function() {
        App.set('currentPath', this.get('currentPath'));
    }.observes('currentPath')

});

App.IndexRoute = Ember.Route.extend({
	
    setupController: function(controller, _model){
        //controller.set('model', _model);
    },

    redirect: function() {
        this.transitionTo('login');
    }

});

App.IndexController = Ember.Controller.extend({

    username: null,
    
    password: null,

    actions: {}

});

App.SignupRoute = Ember.Route.extend({

    model: function(){
        return Ember.Object.create({
            username: null,
            fullName: null,
            email: null,
            password: null
        });
    }

});

App.SignupController = Ember.Controller.extend({

    isUsernameValid: true,

    isEmailValid: true,

    isWaiting: false,

    signUpDone: false,

    signUpFailed: false,

    actions: {

        backward:function(){
            this.transitionToRoute("login");
        },

        signUp: function(){
            var self = this, _model = this.get('model');

            if(!this.get('isUsernameValid') || !this.get('isEmailValid')) return;

            if(!App.ModuleManager.validateModel(_model, {
                    rules: {
                        username: "required",
                        email: "email",
                        password: "required"
                    }
                })) return;

            _model.reopen({
                toNative: function() {
                    var properties = [];
                    for (var key in this) {
                        if (jQuery.inArray(Ember.typeOf(this[key]), ['string', 'number', 'boolean']) !== -1) {
                            properties.push(key);
                        }
                    }
                    return this.getProperties(properties);
                }
            })

            this.set("isWaiting", true);
            App.DataAccess.postReq(App.API.USER.POST.SIGNUP, _model.toNative())
                .then(function(data){
                    self.set("isWaiting", false);

                    if(data.success){
                       self.set('signUpDone', true);
                    }else{
                       self.set('signUpFailed', true);
                    }
                });

        },

        checkUsername: function(){
            var self = this, username = this.get('model').username;

            if(!username) return;

            App.DataAccess.postReq(App.API.USER.POST.USERNAME_EXISTS, {username:this.get('model').username})
               .then(function(data){
                  if(data.success && !data.usernameExists){
                      self.set('isUsernameValid', true);
                  }else{
                      self.set('isUsernameValid', false);
                  }
               });
        },

        checkEmail: function(){
            var self = this, email = this.get('model').email;

            if(!email) return;

            App.DataAccess.postReq(App.API.USER.POST.EMAIL_EXISTS, {email:this.get('model').email})
                .then(function(data){
                    if(data.success && !data.emailExists){
                        self.set('isEmailValid', true);
                    }else{
                        self.set('isEmailValid', false);
                    }
                });
        }

    }

});