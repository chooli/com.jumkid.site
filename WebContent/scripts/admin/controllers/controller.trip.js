App.TripController = Ember.ObjectController.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),
    hideMailer: Ember.computed.alias('controllers.application.hideMailer'),
    mailerCallback: Ember.computed.alias('controllers.application.mailerCallback'),

    mailMsg: null,

    fillMailMsg: function(){
        var _mailMsg;
        if(this.get('model')){
            _mailMsg = SYSLang.fillMailMsgForTrip(this.get('currentUser'), this.get('model').title);
        }
        Ember.set(this, 'mailMsg', _mailMsg);
    }.observes('model.title'),

    socialcomments: null,

    itineraries: null,

    itinerariesDivStyle: null,

    itinerariesChange: function(){
        if(!this.get('itineraries')) return;

        var i, j, _length = this.get('itineraries').length;

        for(i=0;i<_length;i++){
            var attributes = [],
                itinerary = this.get('itineraries')[i],
                attributeTypes = itinerary.attributeTypes===null ? [] : [].concat(itinerary.attributeTypes),
                attributeValues = itinerary.attributeValues===null ? [] : [].concat(itinerary.attributeValues),
                attributeTimes = itinerary.attributeTimes===null ? [] : [].concat(itinerary.attributeTimes);

            for(j=0;j<attributeTypes.length;j++){
                attributes.push({
                    type: attributeTypes[j],
                    value: attributeValues[j],
                    time: attributeTimes[j],
                    isEditing: false
                });
            }
            Ember.set(itinerary, "attributes", attributes);
        }
        this.set('itinerariesDivStyle', "display:flex;width:"+(_length * 240)+"px;");
    }.observes("itineraries"),

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    actions: {

        backward: function () {
            this.send('resetModel');
            this.transitionToRoute("/trips");
        },

        newEntity: function () {
            this.send('resetModel');
        },

        editEntity: function (entityId) {
            var self = this;
            this.set('socialcomments', null);

            App.checkin(self);
            App.DataAccess.getReq(App.API.TRIP.GET.LOAD, {uuid:entityId})
                .then(function(data){
                    if(data.success){
                        self.set('model', data.trip);
                    }
                }).then(function(){
                    App.DataAccess.postReq(App.API.ITINERARY.GET.LOAD, {uuids: self.get('model').refItineraries})
                        .then(function(data){
                            if(data.success){
                                self.set('itineraries', data.itineraries);
                            }
                            App.checkout(self);
                        });
                }).then(function(){
                    App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.LOAD, {module:'trip', moduleRefId:entityId})
                        .then(function(data){
                            if(data.success){
                                self.set('socialcomments', data.socialcomments);
                            }
                            App.checkout(self);
                        });
                }).then(function(){
                    self.send('addObservers');
                });

        },

        save: function () {
            if(!App.ModuleManager.validateModel(this.get('model'), {
                    rules: {
                        title: "required"
                    },
                    messages: {
                        title: "Please enter the title"
                    }
                })) return;

            var self = this,
                _model = this.get('model');

            App.checkin(self);
            App.DataAccess.postReq(App.API.TRIP.POST.SAVE, _model)
                .then(function(data){
                    if(data.success){
                        //update local data
                        self.set('model', data.trip);
                    }

                    App.checkout(self);
                }).then(function(){
                    App.DataAccess.postReq(App.API.ITINERARY.GET.LOAD, {uuids: self.get('model').refItineraries})
                        .then(function(data){
                            if(data.success){
                                self.set('itineraries', data.itineraries);
                            }
                        });
                }).then(function(){
                    self.send('addObservers');
                });
        },

        remove: function () {
            var self = this,
                _model = this.get('model'),
                uuid = _model.uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.TRIP.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.transitionToRoute("/trips");
                        }

                        App.checkout(self);
                    });
            });
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('trip');
            this.set('model', _model);
            this.set('socialcomments', null);
            this.set('itineraries', null);
        },

        showCreateNew: function(itinerary){
            Ember.set(itinerary, "newAttributeType", "activity");
            Ember.set(itinerary, "createNew", true);
        },

        hideCreateNew: function(itinerary){
            Ember.set(itinerary, "createNew", false);
        },

        showEditAttr: function(attribute){
            Ember.set(attribute, "isEditing", true);
        },

        hideEditAttr: function(attribute){
            Ember.set(attribute, "isEditing", false);
        },

        updateAttribute: function(itinerary, attribute){
            var index, self = this;

            itinerary.attributes.forEach(function(el, idx){
                if(el === attribute){
                    index = idx;
                }
            });

            itinerary.attributeTypes[index] = attribute.type;
            itinerary.attributeValues[index] = attribute.value;
            itinerary.attributeTimes[index] = attribute.time;

            App.checkin(self);
            App.DataAccess.postReq(App.API.ITINERARY.POST.SAVE, itinerary)
                .then(function(data){
                    if(data.success){
                        Ember.set(attribute, "isEditing", false);
                    }

                    App.checkout(self);
                });
        },

        saveAttribute: function(itinerary){
            var self = this,
                attributeTypes = itinerary.attributeTypes===null ? [] : [].concat(itinerary.attributeTypes),
                attributeValues = itinerary.attributeValues===null ? [] : [].concat(itinerary.attributeValues),
                attributeTimes = itinerary.attributeTimes===null ? [] : [].concat(itinerary.attributeTimes),
                attributes = itinerary.attributes===null ? [] : [].concat(itinerary.attributes),
                newAttr = {
                    type: itinerary.newAttributeType,
                    value: itinerary.newAttributeValue,
                    time: itinerary.newAttributeTime,
                    isEditing: false
                };

            //validate newAttr
            if(App.FN.isEmpty(newAttr.value)){
                Ember.set(itinerary, "createNew", false);
                return;
            }

            attributes.push(newAttr);
            attributeTypes.push(newAttr.type);
            attributeValues.push(newAttr.value);
            attributeTimes.push(newAttr.time);
            Ember.set(itinerary, "attributeTypes", attributeTypes);
            Ember.set(itinerary, "attributeValues", attributeValues);
            Ember.set(itinerary, "attributeTimes", attributeTimes);

            App.checkin(self);
            App.DataAccess.postReq(App.API.ITINERARY.POST.SAVE, itinerary)
                .then(function(data){
                    if(data.success){
                        Ember.set(itinerary, "newAttributeValue", null);
                        Ember.set(itinerary, "newAttributeTime", null);
                        Ember.set(itinerary, "createNew", false);
                        Ember.set(itinerary, "attributes", attributes);
                    }

                    App.checkout(self);
                });

        },

        removeAttribute: function(itinerary, attribute){
            var index, self = this,
                attributes = itinerary.attributes.filter(function(el, idx){
                    if(el === attribute){
                        index = idx;
                        return false;
                    }
                    return true;
                }),
                attributeTypes = itinerary.attributeTypes.filter(function(el, idx){
                    return idx != index;
                }),
                attributeValues = itinerary.attributeValues.filter(function(el, idx){
                    return idx != index;
                }),
                attributeTimes = itinerary.attributeTimes.filter(function(el, idx){
                    return idx != index;
                });

            Ember.set(itinerary, "attributeTypes", attributeTypes);
            Ember.set(itinerary, "attributeValues", attributeValues);
            Ember.set(itinerary, "attributeTimes", attributeTimes);

            App.checkin(self);
            App.DataAccess.postReq(App.API.ITINERARY.POST.SAVE, itinerary)
                .then(function(data){
                    if(data.success){
                        Ember.set(itinerary, "createNew", false);
                        Ember.set(itinerary, "attributes", attributes);
                    }

                    App.checkout(self);
                });
        },


        print: function(){
            window.open(App.DataAccess.assembleUrl(App.API.TRIP.GET.PRINT, {uuid:this.get('model').uuid}), '_blank');
        },

        share: function(){
            var self = this;

            App.sendMail(this, function(receivers, mailMsg){
                var mailer = this;

                App.checkin(self);
                App.DataAccess.postReq(App.API.TRIP.POST.SHARE, {uuid:self.get('model').uuid,
                            receivers:receivers, mailMsg:mailMsg})
                    .then(function(data){
                        if(data.success){
                            Ember.set(mailer, 'receivers', []);
                            App.sendMailDone(self);
                        }

                        App.checkout(self);
                    });
            });

        },

        queryOptions: function(query, deferred) {
            var keyword = query.term;

            App.DataAccess.postReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.SEARCH, {keyword:query.term,
                facetField:'vlname', facetPrefix:'country', locale:SYSLang.locale})
                    .then(function(data){
                        if(data.success){
                            var _data = [],
                                fixtures = data.fixturedatas;
                            for(var i=0;i<fixtures.length;i++){
                                _data.push({id:fixtures[i].vlvalue, text:fixtures[i].vlvalue});
                            }

                            return deferred.resolve(_data);
                        }else{
                            return deferred.reject(data);
                        }
                });

        },

        addObservers: function(){
            var self = this;

            if(!self.hasObserverFor('model.activated')){
                self.addObserver('model.activated', self, function(){
                    App.checkin(self);
                    App.DataAccess.postReq(App.API.TRIP.POST.SAVE, self.get('model'))
                        .then(function(data){
                            if(data.success){
                                //update local data
                                Ember.set(self.get('model'), 'uuid', data.trip.uuid);
                            }
                            App.checkout(self);
                        });
                });
            }
        }


    }

});
