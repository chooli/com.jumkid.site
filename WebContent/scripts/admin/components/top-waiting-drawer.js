App.TopWaitingDrawerComponent = Ember.Component.extend({
			
	elementId: 'top_waiting_drawer',
		
	isWaiting: null,
	
	isWaitingChange: function(){
		if(this.get('isWaiting')) this.wait();
		else this.finish();
	}.observes('isWaiting'),
	
	wait: function() {			
		Ember.$('#'+this.get('elementId')).animate({
		   top: '44px'
		}, 300);			
	},
	
	finish: function() {
		Ember.run.later(this, function(){
			Ember.$('#'+this.get('elementId')).animate({
			   top: '-50px'
			}, 300);
		}, 1000);
	}
	
});