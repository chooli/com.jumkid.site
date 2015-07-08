App.UserController = Ember.ObjectController.extend({

    needs: ['application'],

    mfiles: [],

    mfilesChange: function(){
        if(this.mfiles && this.mfiles.length>0){
            Ember.set(this.get('model'), 'avatar', this.mfiles[this.mfiles.length-1].uuid);
        }else{
            Ember.set(this.get('model'), 'avatar', null);
        }
    }.observes('mfiles'),

    actions: {

        editEntity: function(){
            var self = this;

            App.checkin(this);
            App.DataAccess.getReq(App.API.USER.GET.LOAD_CURRENT_USER)
                .then(function(data){
                    if(data.success){
                        self.set('model', data.user);
                    }
                    App.checkout(self);
                }).then(function(){
                    var mfiles = [];
                    if(self.get('model').avatar){
                        mfiles.push(Ember.Object.create({
                            uuid: self.get('model').avatar
                        }));
                    }
                    self.set('mfiles', mfiles);
                });
        },

        save: function(){
            if(!App.ModuleManager.validateModel(this.get('model'), {
                    rules: {
                        username: "required",
                        email: "required",
                        password: "required"
                    },
                    messages: {
                        username: "Please enter the username",
                        email: "Please enter the email",
                        password: "Please enter the password"
                    }
                })) return;

            var self = this,
                _model = this.get('model');

            App.confirm(this, function(){
                App.DataAccess.postReq(App.API.USER.POST.SAVE, _model)
                    .then(function(data){
                        App.checkout(self);
                    });

            });
        }

    }

});