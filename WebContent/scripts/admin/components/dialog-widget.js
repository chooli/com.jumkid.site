App.DialogWidgetComponent = App.PopUpComponent.extend({
	
	elementId: 'dialog',

	confirmMessage: null,
	
	message: function(){
		return this.get('confirmMessage') || SYSLang.AreYouSure;
	}.property('confirmMessage'),
	
	callback: null,

	actions: {
		
		doYes: function () {
			this.get('callback').call(this);
			this.set('isConfirm', false);
		},
		
		doNo: function () {
			this.set('isConfirm', false);
		}
		
	}
	
	
});