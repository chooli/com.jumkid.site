/**
 * Created by Chooli on 2/3/2015.
 */
App.FixturedataRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "admintools");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('fixturedata');
            controller.set('model', _model);
        }
        controller.send('search');
    }

});