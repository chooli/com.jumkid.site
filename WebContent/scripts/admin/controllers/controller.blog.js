App.BlogController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    isAdmin: Ember.computed.alias('controllers.application.isAdmin'),

    mfiles: [],

    socialcomments: null,

    mfilesChange: function(){
        if(this.mfiles){
            var attachments = [];
            for(i=0;i<this.mfiles.length;i++){
                attachments.push(this.mfiles[i].uuid);
            }
            Ember.set(this.get('model'), 'attachments', attachments);
        }

    }.observes('mfiles'),

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    actions: {

        backward: function(){
            this.transitionToRoute("/blogs");
        },

        setEditorValue: function(){
            if(this.get('model') && !this.get('model').uuid) Ember.set(this.get('model'), 'htmlContent', "");
        },

        newEntity: function () {
            this.send('resetModel');
        },

        editEntity: function(blogId){
            var self = this,
                blog = null;
            this.set('mfiles', null);
            this.set('socialcomments', null);

            App.checkin(self);
            App.DataAccess.getReq(App.API.BLOG.GET.LOAD, {uuid:blogId})
                .then(function(data){
                    if(data.success){
                        blog = data.blog;
                    }
                }).then(function(){
                    App.DataAccess.htmlReq(App.API.BLOG.GET.STREAM, {uuid:blogId})
                        .then(function(data){
                            Ember.set(blog, 'htmlContent', data);
                            self.set('model', blog);
                        }).then(function(){
                            var attachments = self.get('model').attachments,
                                mfiles = [];
                            if(attachments){
                                attachments.forEach(function(uuid){
                                    mfiles.push(Ember.Object.create({
                                        uuid: uuid
                                    }));
                                }, self);
                            }
                            self.set('mfiles', mfiles);
                        });
                }).then(function(){
                    App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.LOAD, {module:'blog', moduleRefId:blogId})
                        .then(function(data){
                            if(data.success){
                                self.set('socialcomments', data.socialcomments);
                            }
                        });
                    App.checkout(self);
                }).then(function(){
                    self.send('addObservers');
                });
        },

        save: function () {
            if(!App.ModuleManager.validateModel(this.get('model'), {
                    rules: {
                        title: "required",
                        author: "required"
                    },
                    messages: {
                        title: "Please enter the title",
                        author: "Please enter the author name"
                    }
                })) return;

            var self = this,
                _model = this.get('model'),
                editor = CKEDITOR.fire('blur');

            App.confirm(this, function(){
                App.DataAccess.postReq(App.API.BLOG.POST.SAVE, _model)
                    .then(function(data){
                        if(data.success){
                            //update local data
                            self.set('model', data.blog);
                            data.blog.htmlContent = CKEDITOR.instances.html_editor.getData();
                        }else{
                            //TODO warning message
                        }

                        App.checkout(self);
                    }).then(function(){
                        self.send('addObservers');
                    });

            });

        },

        remove: function () {
            var self = this,
                _model = this.get('model'),
                uuid = _model.uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.BLOG.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.transitionToRoute("/blogs");
                        }

                        App.checkout(self);
                    });
            });
        },

        view: function () {
            var _model = this.get('model');
            var url = App.DataAccess.assembleUrl(App.API.SHARE.GET.BLOG, {filename:_model.filename});
            window.open(url);

        },

        _autoSave: function () {
            var autoSaveTask = Ember.run.later(this, function() {
                if(CKEDITOR.instances.html_editor.checkDirty()) {
                    if(CKEDITOR.fire('blur')){
                        App.DataAccess.postReq(App.API.BLOG.POST.SAVE, this.get('model'))
                            .then(function(data){
                                return Ember.RSVP.resolve(data);
                            });
                    }

                }
                this.send('autoSave');
            }, 8000);
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('blog');
            Ember.set(_model, 'author', this.get('currentUser'));
            Ember.set(_model, 'htmlContent', null);
            this.set('model', _model);
            this.set('mfiles', null);
            this.set('socialcomments', null);
        },

        addObservers: function(){
            var self = this;

            if(!self.hasObserverFor('model.activated')){
                self.addObserver('model.activated', self, function(){
                    App.checkin(self);
                    App.DataAccess.postReq(App.API.BLOG.POST.SAVE, self.get('model'))
                        .then(function(data){
                            if(data.success){
                                //update local data
                                Ember.set(self.get('model'), 'uuid', data.blog.uuid);
                            }
                            App.checkout(self);
                        });
                });
            }
        }

    }

});