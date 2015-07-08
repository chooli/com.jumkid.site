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