/**
 * Created by Chooli on 2/3/2015.
 */
App.AdmintoolsController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    currentToolName: null,

    isFixtureData: function(){
        return (this.get('currentToolName')=="fixturedata") ? true : false;
    }.property("currentToolName"),

    actions: {

        launch: function(toolname){
            this.set('currentToolName', toolname);
            this.transitionTo(toolname);

        }

    }

});

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
App.AlbumsController = App.PageableAbstractController.extend({

    needs: ['album'],

    albums: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.ALBUM.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'albums': data.albums,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

                    App.checkout(self);
                });
        },

        newEntity: function () {
            var self = this;
            this.transitionToRoute('/album').then(function(){
                self.get('controllers.album').send('newEntity');
            });
        },

        editEntity: function (album) {
            var self = this;
            this.transitionToRoute('/album').then(function(){
                self.get('controllers.album').set('model', null);
                self.get('controllers.album').send('editEntity', album.uuid);
            });
        }

    }

});

/**
 * Created by Chooli on 11/11/2014.
 */
App.ApplicationController = Ember.ObjectController.extend({

    currentUser: "unknown",

    currentRole: "ROLE_USER",

    isAdmin: function(){
        return this.get('currentRole')=="ROLE_ADMIN"?true:false;
    }.property('currentRole'),

    isWaiting: false,

    _isInProgress: false,
    
    isConfirm: false,

    hideMailer: true,

    confirmMessage: null,
    
    confirmCallback: null,

    mailerCallback: null,

    isConfirmChanged: function () {
    	if(!this.isConfirm) this.send('checkoutProgress');
    }.observes('isConfirm'),
    
    updateCurrentPath: function() {
        App.set('currentPath', this.get('currentPath'));
    }.observes('currentPath')

});

App.confirm = function (controller, callback) {
	controller.get('controllers.application').send('confirm', callback);
};

App.checkin = function (controller) {
	controller.get('controllers.application').send('checkinProgress');
};

App.checkout = function (controller) {
	controller.get('controllers.application').send('checkoutProgress');
};

App.print = function (controller) {
    controller.get('controllers.application').send('print');
};

App.sendMail = function (controller, callback) {
    controller.get('controllers.application').send('sendMail', callback);
};

App.sendMailDone = function (controller) {
    controller.get('controllers.application').send('sendMailDone');
};
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
App.BlogsController = App.PageableAbstractController.extend({
	
	needs: ['blog'],

	blogs: null,

	actions: {
		
		typeSearch: function () {
    		this.send('search');
    	},
		
		search: function (start) {
			var self = this;
			
			App.checkin(self);
			
			App.DataAccess.getReq(App.API.BLOG.GET.SEARCH, {keyword:this.get('keyword'), start:start})
	            .then(function(data) {
	        	
                    self.setProperties({
	                	'blogs': data.blogs,
	                	'currentPage': data.currentPage,
	                	'nextPage': data.nextPage,
	                	'previousPage': data.previousPage,
	                	'totalPages': data.totalPages !== null ? data.totalPages : 0
	                });
	
                    App.checkout(self);
	            });
		},

		newBlog: function () {
			var self = this;
			this.transitionToRoute('/blog').then(function(){
				self.get('controllers.blog').send('newEntity');
			});
		},
		
		editBlog: function (blog) {
			var self = this;
			this.transitionToRoute('/blog').then(function(){
				self.get('controllers.blog').set('model', null);
				self.get('controllers.blog').send('editEntity', blog.uuid);
			});
		}

	}
	
});

App.ContactsController = Ember.Controller.extend({
	
	needs: ['application'],
		
	keyword: '*',
		
	contacts: null,
	
	disabled: function(){
		if (this.get('model') && this.get('model').uuid) return false;
		return true;
	}.property('model.uuid'),
	
	hasNoPreviouse: function () {
		return (this.get('previousPage') === null) ? true : false;
	}.property('previousPage'),
	
	hasNoNext: function () {
		return (this.get('nextPage') === null) ? true : false;
	}.property('nextPage'),
	
	currentPage: 0,
	
	totalPages: 0,
	
	nextPage: null,
	
	previousPage: null,
	
	pagingInfo: function(){
		if (this.get('totalPages') === 0) return null;
		return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
	}.property('totalPages', 'currentPage'),
	
	actions: {
		
		typeSearch: function () {
    		this.send('search');
    	},
		
		search: function (start) {
			var self = this;
			
			App.DataAccess.getReq(App.API.CONTACT.GET.SEARCH, {keyword:this.get('keyword'), start:start})
	            .then(function(data) {
	        	
                    self.setProperties({
	                	'contacts': data.contacts,
	                	'currentPage': data.currentPage,
	                	'nextPage': data.nextPage,
	                	'previousPage': data.previousPage,
	                	'totalPages': data.totalPages !== null ? data.totalPages : 0
	                });
	
	                return Ember.RSVP.resolve(data);
	            });
		},
		
		newEntity: function () {
			var _model = App.ModuleManager.getModel('contact');
			_model.firstname = null;
			_model.lastname = null;
			_model.email = null;
			_model.phone = null;
			_model.comment = null;
			
			this.set('model', _model);
		},
		
		editEntity: function (contact) {
			this.set('model', contact);
		},
		
		save: function () {
			var self = this,
				_model = this.get('model');
			
			App.confirm(this, function(){
				App.DataAccess.postReq(App.API.CONTACT.POST.SAVE, _model)
					.then(function(data){
					if(data.success){
						//update local data
						self.set('model', data.contact);
						self.send('search');
					}else{
						//TODO warning message
					}
					
					App.checkout(self);
				});
				
			});			
			
		},
		
		remove: function () {
			var self = this,
				_model = this.get('model'),
				uuid = _model.uuid;
			
			App.confirm(this, function(){
				App.DataAccess.deleteReq(App.API.CONTACT.DELETE.REMOVE, {uuid:_model.uuid})
					.then(function(data){
						if(data.success){
							self.send('newEntity');
							var index = -1, i=0;
				        	for(i;i<self.contacts.length;i++){
				                if(self.contacts[i].uuid === uuid){
				                    index = i;
				                    break;
				                }
				            }
				        	self.get('contacts').removeAt(index, 1);
						}
					
					App.checkout(self);
				});
			});	
		}
	}
	
});

/**
 * Created by Chooli on 2/3/2015.
 */
App.FixturedataController = App.PageableAbstractController.extend({

    fixturedatas: null,

    keyword: '',

    uploadForm: function(){
        return Ember.$('#upload-form')[0];
    }.property(),

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    showProgress: function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = (evt.loaded / evt.total) * 100;
            Ember.$('#upload-progress').fadeIn("fast", function(){
                Ember.$('#upload-progress').html(Math.floor(percentComplete)+'%');
            });
        }
    },

    hideProgress: function () {
        Ember.$('#upload-progress').fadeOut("fast", function(){
            Ember.$('#upload-progress').html('');
        });
    },

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.SEARCH, {keyword:this.get('keyword'), facetField:'vlname',
                                                        facetPrefix:this.get('facetPrefix'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'fixturedatas': data.fixturedatas,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0,
                        'totalRecords': data.totalRecords !== null ? data.totalRecords : 0,
                        'facetFields': data.facetFields
                    });

                    App.checkout(self);
                });
        },

        editEntity: function(fixturedata){
            this.set('model', fixturedata);
        },

        newEntity: function(){
            this.send('resetModel');
        },

        save: function () {
            if(!App.ModuleManager.validateModel(this.get('model'), {
                    rules: {
                        vlname: "required",
                        vlvalue: "required"
                    },
                    messages: {
                        vlname: "Please enter the name",
                        vlvalue: "Please enter the value"
                    }
                })) return;

            var self = this,
                _model = this.get('model');

            App.checkin(self);
            App.DataAccess.postReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.SAVE, _model)
                .then(function(data){
                    if(data.success){
                        //update local data
                        self.set('model', data.fixturedata);
                    }
                    App.checkout(self);
                });
        },

        remove: function () {
            var self = this,
                _model = this.get('model'),
                uuid = _model.uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.ADMINTOOLS.FIXTUREDATA.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.send('resetModel');
                            self.send('search', 0);
                        }

                        App.checkout(self);
                    });
            });
        },

        importFile: function(){
            var self = this,
                _form = this.get('uploadForm'),
                formData = new FormData(_form);

            if(_form.file.value.length < 1) return;

            App.checkin(self);
            App.DataAccess.uploadReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.IMPORT, formData, this.showProgress)
                .then(function (data) {
                    if(data.success) {
                        _form.reset();
                        self.send('search', 0);
                        self.hideProgress();
                    }

                    App.checkout(self);
                });
        },

        resetFacet: function(){
            this.set('facetPrefix', '');
            this.send('search', 0);
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('fixturedata');
            Ember.set(_model, 'locale', App.FIXTURE.language[0].value);
            this.set('model', _model);
        }

    }

});
App.FlyerController = Ember.ObjectController.extend({

    needs: ['application', 'product'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    products: [],

    productsChange: function(){
        if(this.products){
            var refProducts = [];
            for(i=0;i<this.products.length;i++){
                refProducts.push(this.products[i].uuid);
            }
            Ember.set(this.get('model'), 'refProducts', refProducts);
        }

    }.observes('products'),

    socialcomments: null,

    selectedproduct: null,

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    productDisabled: function(){
        if (this.get('selectedproduct') && this.get('selectedproduct').uuid) return false;
        return true;
    }.property('selectedproduct'),

    actions: {

        backward: function () {
            this.transitionToRoute("/flyers");
        },

        setFeatured: function(product){
            Ember.set(this.get('model'), 'featuredPic', product.uuid);
        },

        openProductSpec: function(entity){
            var self = this;
            this.transitionToRoute('/product').then(function(){
                self.get('controllers.product').set('model', null);
                self.get('controllers.product').send('editEntity', entity.uuid);
            });
        },

        loadProduct: function (product) {
            var self = this;

            App.checkin(self);
            App.DataAccess.getReq(App.API.PRODUCT.GET.LOAD, {uuid:product.uuid})
                .then(function(data){
                    if(data.success){
                        self.set('selectedproduct', data.product);
                    }
                    App.checkout(self);
                });
        },

        saveProduct: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.PRODUCT.POST.SAVE, this.get('selectedproduct'))
                .then(function(data){
                    if(data.success){
                        self.set('selectedproduct', data.product);
                    }
                    App.checkout(self);
                }).then(function(){
                    self.send('save');
                });
        },

        removeProduct: function(){
            var self = this,
                products = this.get('products'),
                uuid = this.get('selectedproduct').uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.PRODUCT.DELETE.REMOVE, {uuid:uuid})
                    .then(function(data){
                        if(data.success){
                            self.set('selectedproduct', null);
                            //update local data
                            var newProducts = [];
                            for(i=0;i<products.length;i++){
                                if(products[i].uuid !== uuid) {
                                    newProducts.push(products[i]);
                                }
                            }
                            self.set('products', newProducts);
                            products = null;
                        }

                        App.checkout(self);
                    }).then(function(){
                        self.send('save');
                    });

            });
        },

        newEntity: function () {
            this.send('resetModel');
        },

        editEntity: function (entityId) {
            var self = this;
            this.set('products', null);
            this.set('socialcomments', null);
            this.set('selectedproduct', null);

            App.checkin(self);
            App.DataAccess.getReq(App.API.FLYER.GET.LOAD, {uuid:entityId})
                .then(function(data){
                    if(data.success){
                        self.set('model', data.flyer);
                    }
                }).then(function(){
                    var refProducts = self.get('model').refProducts,
                        products = [];
                    if(refProducts){
                        refProducts.forEach(function(uuid){
                            products.push(Ember.Object.create({
                                uuid: uuid
                            }));
                        }, self);
                    }
                    self.set('products', products);
                }).then(function(){
                    App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.LOAD, {module:'flyer', moduleRefId:entityId})
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
            App.DataAccess.postReq(App.API.FLYER.POST.SAVE, _model)
                .then(function(data){
                    if(data.success){
                        //update local data
                        self.set('model', data.flyer);
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
                App.DataAccess.deleteReq(App.API.FLYER.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.transitionToRoute("/flyers");
                        }

                        App.checkout(self);
                    });
            });
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('flyer');
            this.set('model', _model);
            this.set('products', []);
            this.set('selectedproduct', null);
            this.set('socialcomments', null);
        },

        addObservers: function(){
            var self = this;

            if(!self.hasObserverFor('model.activated')){
                self.addObserver('model.activated', self, function(){
                    App.checkin(self);
                    App.DataAccess.postReq(App.API.FLYER.POST.SAVE, self.get('model'))
                        .then(function(data){
                            if(data.success){
                                //update local data
                                Ember.set(self.get('model'), 'uuid', data.flyer.uuid);
                            }
                            App.checkout(self);
                        });
                });
            }
        }


    }

});

/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyersController = App.PageableAbstractController.extend({

    needs: ["flyer"],

    flyers: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.FLYER.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'flyers': data.flyers,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

                    App.checkout(self);
                });
        },

        newEntity: function () {
            var self = this;
            this.transitionToRoute('/flyer').then(function(){
                self.get('controllers.flyer').send('newEntity');
            });
        },

        editEntity: function (entity) {
            var self = this;
            this.transitionToRoute('/flyer').then(function(){
                self.get('controllers.flyer').set('model', null);
                self.get('controllers.flyer').send('editEntity', entity.uuid);
            });
        }

    }

});

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


/**
 * Created by Chooli on 1/18/2015.
 */
App.ProductController = Ember.ObjectController.extend({

    needs: ['application', 'flyer'],

    attributes: [],

    attributesChange: function(){
        var i;
        if(this.attributes){
            var attributeNames = [], attributeValues = [];
            for(i=0;i<this.attributes.length;i++){
                attributeNames.push(this.attributes[i].name);
                attributeValues.push(this.attributes[i].value);
                Ember.set(this.get('model'), 'attributeNames', attributeNames);
                Ember.set(this.get('model'), 'attributeValues', attributeValues);
            }
        }

    }.observes('attributes.@each.name', 'attributes.@each.value'),

    actions: {

        backward: function () {
            this.transitionToRoute("/flyer");
        },

        editEntity: function (entityId) {
            var self = this;

            this.set('attributes', null);

            App.checkin(self);
            App.DataAccess.getReq(App.API.PRODUCT.GET.LOAD, {uuid:entityId})
                .then(function(data){
                    if(data.success){
                        self.set('model', data.product);
                    }
                    App.checkout(self);
                }).then(function(){
                    var i, attributes = [], attributeNames = self.get('model').attributeNames,
                        attributeValues = self.get('model').attributeValues;
                    if(attributeNames){
                        for(i=0;i<attributeNames.length;i++){
                            attributes.push(Ember.Object.create({
                                name: attributeNames[i],
                                value: attributeValues[i]
                            }));
                        }
                    }
                    self.set('attributes', attributes);
                });

        },

        addAttribute: function () {
            var attributes = [];
            attributes.push(Ember.Object.create({
                name: "",
                value: ""
            }));

            attributes = this.get('attributes').concat(attributes);
            this.set('attributes', attributes);
        },

        save: function(){
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.PRODUCT.POST.SAVE, this.get('model'))
                .then(function(data){
                    if(data.success){
                        self.set('model', data.product);
                    }
                    App.checkout(self);
                });
        }

    }

});
App.SearchController = Ember.ArrayController.extend({
	
	needs: ['application', 'index'],
	
	keyword: '*',
	
	mfiles: null,

	hasNoPreviouse: function () {
		return (this.get('previousPage') === null) ? true : false;
	}.property('previousPage'),

	hasNoNext: function () {
		return (this.get('nextPage') === null) ? true : false;
	}.property('nextPage'),

	currentPage: 0,

	totalPages: 0,

	nextPage: null,

	previousPage: null,

	pageSize: 20,

	isPage20: function () {
		return this.get('pageSize')===20 ? true :  false;
	}.property('pageSize'),

	isPage50: function () {
		return this.get('pageSize')===50 ? true :  false;
	}.property('pageSize'),

	isPage80: function () {
		return this.get('pageSize')===80 ? true :  false;
	}.property('pageSize'),

	pagingInfo: function(){
		if (this.get('totalPages') === 0) return null;
		return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
	}.property('totalPages', 'currentPage'),

    actions: {

		nextPage: function () {
			this.send('search', this.get('nextPage'));
		},

		previousPage: function () {
			this.send('search', this.get('previousPage'));
		},

    	typeSearch: function () {
    		this.send('search');
    	},

		pageSearch: function (size) {
			this.set('pageSize', size);
			this.send('search');
		},

        search: function (start) {
        	var self = this;

			this.send('checkinProgress');

            App.DataAccess.getReq(App.API.FILE.GET.SEARCH, {keyword:this.get('keyword'), start:start, limit:this.get('pageSize')})
                .then(function(data) {

                    self.setProperties({
                    	'mfiles': data.mediafiles,
                    	'currentPage': data.currentPage,
                    	'nextPage': data.nextPage,
                    	'previousPage': data.previousPage,
                    	'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

					self.send('checkoutProgress');
            });

        },

        remove: function (uuid) {
            var index = -1, i=0;
        	for(i;i<this.mfiles.length;i++){
                if(this.mfiles[i].uuid === uuid){
                    index = i;
                    break;
                }
            }
        	this.get('mfiles').removeAt(index, 1);
        },

        replace: function (mediafile) {
        	var index = -1, i=0;
        	for(i;i<this.mfiles.length;i++){
                if(this.mfiles[i].uuid === mediafile.uuid){
                	this.mfiles[i] = mediafile;
                    break;
                }
            }
        },
        
        loadFile: function (mediafile) {
        	this.get('controllers.index').set('selectedfile', mediafile);
        }
	
    }

});


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

/**
 * Created by Chooli on 1/13/2015.
 */
App.TripsController = App.PageableAbstractController.extend({

    needs: ["trip"],

    trips: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.TRIP.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'trips': data.trips,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

                    App.checkout(self);
                });
        },

        newEntity: function () {
            var self = this;
            this.transitionToRoute('/trip').then(function(){
                self.get('controllers.trip').send('newEntity');
            });
        },

        editEntity: function (entity) {
            var self = this;
            this.transitionToRoute('/trip').then(function(){
                self.get('controllers.trip').set('model', null);
                self.get('controllers.trip').send('editEntity', entity.uuid);
            });
        }

    }

});

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