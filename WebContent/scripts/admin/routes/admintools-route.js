/**
 * Created by Chooli on 2/3/2015.
 */
App.AdmintoolsRoute = Ember.Route.extend({

    setupController: function(controller, _model){
        controller.send('switchMenu', "admintools");
        controller.send('launch', 'fixturedata');
    }

});