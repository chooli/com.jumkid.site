App.AlbumsRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "albums");
        controller.send('search');
    }

});