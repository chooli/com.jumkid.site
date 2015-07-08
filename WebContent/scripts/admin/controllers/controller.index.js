/**
 * Created by Chooli on 2015-03-12.
 */
App.IndexController = Ember.Controller.extend({

    needs: ['application', 'blog', 'album', 'flyer', 'trip', 'friends'],

    recentUpdates: null,

    recentModules: function(){
        if(this.get('recentUpdates')){
            return this.get('recentUpdates').filter(function(datalog){
                if(datalog.module === "blog" || datalog.module === "album" ||
                    datalog.module === "flyer" || datalog.module === "trip"){
                    var objJson = Ember.$.parseJSON(datalog.object);
                    Ember.set(datalog, "object", objJson);
                    return datalog;
                }
                return null;
            });
        }
        return [];
    }.property('recentUpdates'),

    recentComments: function(){
        if(this.get('recentUpdates')){
            return this.get('recentUpdates').filterBy('module', 'socialcomment');
        }
        return [];
    }.property('recentUpdates'),

    outstandingEvents: null,

    outstandingTrips: null,

    actions: {

        initDashboard: function(){
            this.send('loadRecentUpdates');
            this.send('loadOutstandingEvents');
            this.send('loadOutstandingTrips');
        },

        loadRecentUpdates: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.getReq(App.API.DASHBOARD.GET.LOAD_RECENT_UPDATES)
                .then(function(data){
                    if(data.success){
                        self.set("recentUpdates", data.datalogs);
                    }
                    App.checkout(self);
                });

        },

        loadOutstandingEvents: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.EVENT.POST.LIST)
                .then(function(data){
                    self.setProperties({
                        'outstandingEvents': data.events
                    });
                    App.checkout(self);
                });

        },

        loadOutstandingTrips: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.TRIP.POST.RECENT)
                .then(function(data){
                    self.setProperties({
                        'outstandingTrips': data.trips
                    });
                    App.checkout(self);
                });

        },

        editTrip: function(trip){
            var self = this, uuid = trip.uuid;

            this.transitionToRoute('/trip').then(function(){
                self.get('controllers.trip').set('model', null);
                self.get('controllers.trip').send('editEntity', uuid);
            });
        },

        editEntity: function(datalog){
            var self = this,
                uuid = datalog.objectId,
                module = datalog.module;
            if(module === "album"){
                this.transitionToRoute('/album').then(function(){
                    self.get('controllers.album').set('model', null);
                    self.get('controllers.album').send('editEntity', uuid);
                });
            }else
            if(module === "blog"){
                this.transitionToRoute('/blog').then(function(){
                    self.get('controllers.blog').set('model', null);
                    self.get('controllers.blog').send('editEntity', uuid);
                });
            }else
            if(module === "flyer"){
                this.transitionToRoute('/flyer').then(function(){
                    self.get('controllers.flyer').set('model', null);
                    self.get('controllers.flyer').send('editEntity', uuid);
                });
            }else
            if(module === "trip"){
                this.transitionToRoute('/trip').then(function(){
                    self.get('controllers.trip').set('model', null);
                    self.get('controllers.trip').send('editEntity', uuid);
                });
            }
        },

        acceptEvent: function(event){
            var self = this, events = this.get('outstandingEvents');
            App.checkin(self);
            App.DataAccess.getReq(App.API.EVENT.GET.FIRE, {id:event.id})
                .then(function(data){

                    if(data.success){
                        var _events = events.filter(function(el, idx){
                            return el != event;
                        });
                        Ember.set(self, 'outstandingEvents', _events);
                    }

                    App.checkout(self);
                });

        },

        rejectEvent: function(event){
            var self = this, events = this.get('outstandingEvents');
            App.checkin(self);
            App.DataAccess.deleteReq(App.API.EVENT.DELETE.REMOVE, {id:event.id})
                .then(function(data){

                    if(data.success){
                        var _events = events.filter(function(el, idx){
                            return el != event;
                        });
                        Ember.set(self, 'outstandingEvents', _events);
                    }

                    App.checkout(self);
                });
        }

    }

});

