/**
 * Created by Chooli on 11/11/2014.
 */
App.ApplicationController = Ember.ObjectController.extend({

    currentUser: "unknown",

    currentRole: "ROLE_USER",

    isAdmin: function(){
        return this.get('currentRole')=="ROLE_ADMIN"?true:false;
    }.property('currentRole'),

    isWaiting: false,

    _isInProgress: false,
    
    isConfirm: false,

    hideMailer: true,

    confirmMessage: null,
    
    confirmCallback: null,

    mailerCallback: null,

    isConfirmChanged: function () {
    	if(!this.isConfirm) this.send('checkoutProgress');
    }.observes('isConfirm'),
    
    updateCurrentPath: function() {
        App.set('currentPath', this.get('currentPath'));
    }.observes('currentPath')

});

App.confirm = function (controller, callback) {
	controller.get('controllers.application').send('confirm', callback);
};

App.checkin = function (controller) {
	controller.get('controllers.application').send('checkinProgress');
};

App.checkout = function (controller) {
	controller.get('controllers.application').send('checkoutProgress');
};

App.print = function (controller) {
    controller.get('controllers.application').send('print');
};

App.sendMail = function (controller, callback) {
    controller.get('controllers.application').send('sendMail', callback);
};

App.sendMailDone = function (controller) {
    controller.get('controllers.application').send('sendMailDone');
};