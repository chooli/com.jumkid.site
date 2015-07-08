App.SocialCommentsEditorComponent = Ember.Component.extend({

    elementId: 'socialcomments-editor-panel',

    currentUser: null,

    module: null,

    moduleRefId: null,

    moduleRefIdChange: function(){
        Ember.set(this.get('socialcomment'), 'moduleRefId', this.get('moduleRefId'));
    }.observes('moduleRefId'),

    socialcomment: {
        socialUserId: null,
        activated: true,
        content: null,
        module: null,
        moduleRefId: null
    },

    socialcomments: null,

    offlineCount: function(){
        var socialcomments = this.get('socialcomments');
        return socialcomments.filterBy('activated', false).get('length');
    }.property("socialcomments.@each.activated"),

    actions: {

        toggleActivate: function(socialcomment){
            var self = this;

            Ember.set(socialcomment, 'activated', socialcomment.activated?false:true);

            this.sendAction('checkinProgress');
            App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.SAVE, socialcomment)
                .then(function(data){
                    if(!data.success){
                        Ember.set(socialcomment, 'activated', socialcomment.activated?false:true);
                    }

                    self.sendAction('checkoutProgress');
                });
        },

        save: function(){
            var self = this, socialcomment = this.get('socialcomment');

            Ember.set(socialcomment, 'module', this.get('module'));
            Ember.set(socialcomment, 'socialUserId', this.get('currentUser'));

            if(!App.ModuleManager.validateModel(socialcomment, {
                    rules: {
                        content: "required",
                        moduleRefId: "required"
                    },
                    messages: {
                        content: "Please enter the content"
                    }
                })) return;

            this.sendAction('checkinProgress');
            App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.SAVE, socialcomment)
                .then(function(data){
                    if(data.success){
                        Ember.set(self.get('socialcomment'), 'content', null);
                        var socialcomments = self.get('socialcomments').concat(data.socialcomment);
                        self.set('socialcomments', socialcomments);
                    }

                    self.sendAction('checkoutProgress');
                });
        },

        remove: function(socialcomment){
            var self = this;

            this.sendAction('confirm', function(){
                App.DataAccess.deleteReq(App.API.SOCIALCOMMENTS.DELETE.REMOVE, {uuid:socialcomment.uuid})
                    .then(function(data){
                        if(data.success){
                            var index, i=0;
                            for(i;i<self.socialcomments.length;i++){
                                if(self.socialcomments[i].uuid === socialcomment.uuid){
                                    index = i;
                                    break;
                                }
                            }
                            self.get('socialcomments').removeAt(index, 1);
                        }

                        self.sendAction('checkoutProgress');
                    });
            });
        }

    },

    willDestroyElement: function(){
        this.set('socialcomments', null);
    }

});