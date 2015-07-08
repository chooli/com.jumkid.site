/**
 * Created by Chooli on 2/10/2015.
 */
App.PopUpComponent = Ember.Component.extend({

    isHidden: true,

    isHiddenChange: function(){
        if(this.get('isHidden')) this.send('hide');
        else this.send('show');
    }.observes('isHidden'),

    isConfirm: false,

    isConfirmChange: function(){
        if(this.get('isConfirm')) this.send('show');
        else this.send('hide');
    }.observes('isConfirm'),

    actions: {

        show: function (){
            Ember.$('#'+this.get('elementId')).css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "visible"});
        },

        hide: function (){
            Ember.$('#'+this.get('elementId')).css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "hidden"});
        }

    }


});