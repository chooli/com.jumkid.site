/**
 * Created by Chooli on 1/13/2015.
 */
App.FriendsController = App.PageableAbstractController.extend({

    toggleInvitation: false,

    toggleInviteEmail: false,

    toggleInvitationSent: false,

    invitePanelStyle: function(){
        return this.get('toggleInvitation') ? "display: inline-block;" : "display:none;";
    }.property('toggleInvitation'),

    newFriend: {
        inviteMsg: null,
        usernameOrEmail: null,
        username: null,
        email: null
    },

    existFriend: null,

    notFoundFriend: false,

    friends: null,

    events: null,

    eventPanelStyle: function(){
        return (this.get('events') && this.get('events').length>0) ? "display: inline-block;" : "display:none;";
    }.property('events'),

    actions: {

        search: function () {
            var self = this;

            App.checkin(self);
            App.DataAccess.getReq(App.API.FRIENDS.GET.MY)
                .then(function(data) {

                    self.setProperties({
                        'friends': data.friends,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

                    App.checkout(self);
                }).then(function(){
                    App.DataAccess.postReq(App.API.EVENT.POST.LIST)
                        .then(function(data){
                           self.setProperties({
                               'events': data.events
                           });
                        });
                });
        },

        newEntity: function () {
            var self = this;
            this.transitionToRoute('/friend').then(function(){
                self.get('controllers.friend').send('newEntity');
            });
        },

        editEntity: function (entity) {
            var self = this;
            this.transitionToRoute('/friend').then(function(){
                self.get('controllers.friend').set('model', null);
                self.get('controllers.friend').send('editEntity', entity.uuid);
            });
        },

        find: function(){
            var self = this;

            self.set('existFriend', null);

            App.checkin(self);
            App.DataAccess.postReq(App.API.FRIENDS.POST.FIND, {usernameOrEmail:this.get('newFriend').usernameOrEmail})
                .then(function(data) {

                    if(data.success){
                        if(data.user) self.set('existFriend', data.user);
                        else{
                            if(App.ModuleManager.validateModel(self.get('newFriend'), {
                                rules: {
                                    usernameOrEmail: "email"
                                }
                            })){
                                self.set('toggleInviteEmail', true);
                            }else{
                                self.set('notFoundFriend', true);
                            }
                        }
                    }

                    App.checkout(self);
                });
        },

        invite: function(){
            if(!this.get('toggleInvitation')){
                Ember.set(this.get('newFriend'), 'inviteMsg', SYSLang.fillMailMsgForInvite(this.get('currentUser')));
                this.set('toggleInvitation', true);
            }
        },

        connect: function(){
            var self = this,
                username = self.get('existFriend').username,
                mailMsg = self.get('newFriend').inviteMsg;

            App.checkin(self);
            App.DataAccess.postReq(App.API.FRIENDS.POST.CONNECT, {username:username, mailMsg:mailMsg})
                .then(function(data) {

                    if(data.success){
                        self.set('toggleInvitationSent', true);
                        self.set('existFriend', null);
                        self.setProperties({
                            "newFriend": {
                                "usernameOrEmail": null,
                                "username": null,
                                "email": null
                            }
                        });
                        //Ember.set(self.get('newFriend'), 'usernameOrEmail', null);
                        //Ember.set(self.get('newFriend'), 'username', null);
                        //Ember.set(self.get('newFriend'), 'email', null);

                        //close invitation panel later
                        Ember.run.later(self, function(){
                            this.set('toggleInvitationSent', false);
                            this.set('toggleInvitation', false);
                        },3000);
                    }

                    App.checkout(self);
                });
        },

        disconnect: function(friend){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.FRIENDS.POST.DISCONNECT, {friendname:friend.username})
                .then(function(data) {

                    if(data.success){
                        self.send('search');
                    }

                    App.checkout(self);
                });
        },

        send: function(){
            var self = this, newFriend = self.get('newFriend');

            App.checkin(self);
            App.DataAccess.postReq(App.API.FRIENDS.POST.INVITE, {email:newFriend.usernameOrEmail, mailMsg:newFriend.inviteMsg})
                .then(function(data) {

                    if(data.success){
                        self.set('toggleInviteEmail', false);
                        self.set('toggleInvitation', false);

                        Ember.set(self.get('newFriend'), 'usernameOrEmail', null);
                        Ember.set(self.get('newFriend'), 'username', null);
                        Ember.set(self.get('newFriend'), 'email', null);
                    }

                    App.checkout(self);
                });

        },

        accept: function(inviteEvent){
            var self = this, events = this.get('events');
            App.checkin(self);
            App.DataAccess.getReq(App.API.EVENT.GET.FIRE, {id:inviteEvent.id})
                .then(function(data){

                   if(data.success){
                       var _events = events.filter(function(el, idx){
                           return el != inviteEvent;
                       });
                       Ember.set(self, 'events', _events);
                       self.send('search');
                   }

                   App.checkout(self);
                });

        },

        reject: function(inviteEvent){
            var self = this, events = this.get('events');
            App.checkin(self);
            App.DataAccess.deleteReq(App.API.EVENT.DELETE.REMOVE, {id:inviteEvent.id})
                .then(function(data){

                    if(data.success){
                        var _events = events.filter(function(el, idx){
                            return el != inviteEvent;
                        });
                        Ember.set(self, 'events', _events);
                    }

                    App.checkout(self);
                });
        }

    }

});
