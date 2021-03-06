App.AlbumRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "albums");
        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('album');
            controller.set('model', _model);
        }

    },

    actions: {

        willTransition: function(transition) {
            //remove observer
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});