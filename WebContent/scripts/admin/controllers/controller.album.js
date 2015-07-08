App.AlbumController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    mfiles: [],

    mfilesChange: function(){
        if(this.mfiles){
            var attachments = [];
            for(i=0;i<this.mfiles.length;i++){
                attachments.push(this.mfiles[i].uuid);
            }
            Ember.set(this.get('model'), 'attachments', attachments);
        }

    }.observes('mfiles'),

    socialcomments: null,

    selectedfile: null,

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    fileDisabled: function(){
        if (this.get('selectedfile') && this.get('selectedfile').uuid) return false;
        return true;
    }.property('selectedfile'),

    actions: {

        backward: function(){
            this.transitionToRoute("/albums");
        },

        loadFile: function (mfile) {
            var self = this;

            App.checkin(self);
            App.DataAccess.getReq(App.API.FILE.GET.INFO, {uuid:mfile.uuid})
                .then(function(data){
                    if(data.success){
                        self.set('selectedfile', data.mediafile);
                    }
                    App.checkout(self);
                });
        },

        downloadFile: function () {
            var url = App.DataAccess.assembleUrl(App.API.FILE.GET.DOWLOAD, {uuid:this.get('selectedfile').uuid});
            window.location = url;
        },

        saveFile: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.FILE.POST.SAVE, this.get('selectedfile'))
                .then(function(data){
                    if(data.success){
                        self.set('selectedfile', data.mediafile);
                    }
                    App.checkout(self);
                }).then(function(){
                    self.send('save');
                });
        },

        removeFile: function(){
            var self = this,
                mfiles = this.get('mfiles'),
                uuid = this.get('selectedfile').uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.FILE.DELETE.REMOVE, {uuid:uuid})
                    .then(function(data){
                        if(data.success){
                            self.set('selectedfile', null);
                            //update local data
                            var _mfiles = mfiles.filter(function(el, idx){
                                return el.uuid != uuid;
                            });
                            self.set('mfiles', _mfiles);
                            mfiles = null;
                        }

                        App.checkout(self);
                    }).then(function(){
                        self.send('save');
                    });

            });
        },

        setFeatured: function(mfile){
            Ember.set(this.get('model'), 'featuredPic', mfile.uuid);
        },

        newEntity: function () {
            this.send('resetModel');
        },

        editEntity: function (entityId) {
            var self = this;
            this.set('mfiles', null);
            this.set('socialcomments', null);
            this.set('selectedfile', null);

            App.checkin(self);
            App.DataAccess.getReq(App.API.ALBUM.GET.LOAD, {uuid:entityId})
                .then(function(data){
                    if(data.success){
                        self.set('model', data.album);

                    }
                }).then(function(){
                    var attachments = self.get('model').attachments;
                    App.DataAccess.postReq(App.API.FILE.POST.LIST, {uuids: attachments})
                        .then(function(data){
                            if(data.success){
                                self.set('mfiles', data.mfiles);
                            }
                        });

                }).then(function(){
                    App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.LOAD, {module:'album', moduleRefId:entityId})
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
            App.DataAccess.postReq(App.API.ALBUM.POST.SAVE, _model)
                .then(function(data){
                    if(data.success){
                        //update local data
                        self.set('model', data.album);
                    }
                    App.checkout(self);
                }).then(function(){
                    self.send('addObservers');
                });
        },

        remove: function () {
            var self = this,
                _model = this.get('model'),
                uuid = _model.uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.ALBUM.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.transitionToRoute("/albums");
                        }

                        App.checkout(self);
                    });
            });
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('album');
            Ember.set(_model, "style", App.FIXTURE.albumStyles[0].value);
            this.set('model', _model);
            this.set('mfiles', []);
            this.set('socialcomments', null);
            this.set('selectedfile', null);
        },

        addObservers: function(){
            var self = this;

            if(!self.hasObserverFor('model.activated')){
                self.addObserver('model.activated', self, function(){
                    App.checkin(self);
                    App.DataAccess.postReq(App.API.ALBUM.POST.SAVE, self.get('model'))
                        .then(function(data){
                            if(data.success){
                                //update local data
                                Ember.set(self.get('model'), 'uuid', data.album.uuid);
                            }
                            App.checkout(self);
                        });
                });
            }
        }

    }

});