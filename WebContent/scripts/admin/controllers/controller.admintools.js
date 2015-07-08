/**
 * Created by Chooli on 2/3/2015.
 */
App.AdmintoolsController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    currentToolName: null,

    isFixtureData: function(){
        return (this.get('currentToolName')=="fixturedata") ? true : false;
    }.property("currentToolName"),

    actions: {

        launch: function(toolname){
            this.set('currentToolName', toolname);
            this.transitionTo(toolname);

        }

    }

});
