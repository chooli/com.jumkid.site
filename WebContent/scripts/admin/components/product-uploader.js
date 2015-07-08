/**
 * Created by Chooli on 1/13/2015.
 */
App.ProductUploaderComponent = Ember.Component.extend({

    elementId: 'product-upload-panel',

    products: null,

    uploadForm: function(){
        return Ember.$('#upload-form')[0];
    }.property(),

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

        upload: function () {
            var self = this,
                _form = this.get('uploadForm'),
                formData = new FormData(_form);

            if(_form.file.value.length < 1) return;

            this.sendAction('checkinProgress');

            App.DataAccess.uploadReq(App.API.PRODUCT.POST.UPLOAD, formData, this.showProgress)
                .then(function (data) {
                    if(data.success) {
                        _form.reset();
                        var products = self.get('products').concat(data.products);
                        self.set('products', products);
                        self.hideProgress();
                    }

                    self.sendAction('checkoutProgress');
                }).then(function(){
                    self.sendAction('action');
                });

        },

        remove: function(uuid){
            var self = this,
                products = self.get('products');

            self.sendAction('confirm', function(){
                //remove file from the system
                App.DataAccess.deleteReq(App.API.PRODUCT.DELETE.REMOVE, {uuid:uuid})
                    .then(function (data) {
                        var newProducts = [];
                        for(i=0;i<products.length;i++){
                            if(products[i].uuid !== uuid) {
                                newProducts.push(products[i]);
                            }
                        }
                        self.set('products', newProducts);
                        self.sendAction('checkoutProgress');
                        products = null;
                    });

            });


        }

    },

    willDestroyElement: function(){
        this.set('products', null);
    }

});
