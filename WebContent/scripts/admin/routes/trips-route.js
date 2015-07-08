/**
 * Created by Chooli on 1/13/2015.
 */
App.TripsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "trips");
        controller.send('search');
    }

});
