/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyersRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "flyers");
        controller.send('search');
    }

});
