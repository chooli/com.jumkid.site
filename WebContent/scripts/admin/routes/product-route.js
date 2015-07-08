/**
 * Created by Chooli on 1/18/2015.
 */
App.ProductRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('product');
            controller.set('model', _model);
        }

    }

});
