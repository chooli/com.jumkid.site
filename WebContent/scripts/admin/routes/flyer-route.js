/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyerRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");

        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('flyer');
            controller.set('model', _model);
        }

        if(controller.get('selectedproduct')){
            controller.send('loadProduct', controller.get('selectedproduct'));
        }

    },

    actions: {

        willTransition: function(transition) {
            //remove observer
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});
