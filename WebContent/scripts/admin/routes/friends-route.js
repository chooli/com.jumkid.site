/**
 * Created by Chooli on 2015-03-05.
 */
App.FriendsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "friends");
        controller.send('search');
    }

});
