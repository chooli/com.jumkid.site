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
