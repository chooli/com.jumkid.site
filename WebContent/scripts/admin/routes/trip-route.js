/**
 * Created by Chooli on 1/13/2015.
 */
App.TripRoute = Ember.Route.extend({

    setupController: function(controller){
        controller.send('switchMenu', "trips");

        if(!controller.get('model')){
            var _model = App.ModuleManager.getModel('trip');
            controller.set('model', _model);
        }

        Ember.run.schedule('afterRender', this, function () {
            // Set up the number formatting.
            Ember.$('input[name=numOfAdult]').number( true, 0 );
            Ember.$('input[name=numOfChild]').number( true, 0 );
        });

    },

    actions: {

        willTransition: function(transition) {
            //hide mailer
            this.controller.set('hideMailer', true);
            //remove observers
            this.controller.removeObserver('model.activated', this.controller);
        }

    }

});
