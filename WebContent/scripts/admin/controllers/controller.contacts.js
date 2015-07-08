App.ContactsController = Ember.Controller.extend({
	
	needs: ['application'],
		
	keyword: '*',
		
	contacts: null,
	
	disabled: function(){
		if (this.get('model') && this.get('model').uuid) return false;
		return true;
	}.property('model.uuid'),
	
	hasNoPreviouse: function () {
		return (this.get('previousPage') === null) ? true : false;
	}.property('previousPage'),
	
	hasNoNext: function () {
		return (this.get('nextPage') === null) ? true : false;
	}.property('nextPage'),
	
	currentPage: 0,
	
	totalPages: 0,
	
	nextPage: null,
	
	previousPage: null,
	
	pagingInfo: function(){
		if (this.get('totalPages') === 0) return null;
		return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
	}.property('totalPages', 'currentPage'),
	
	actions: {
		
		typeSearch: function () {
    		this.send('search');
    	},
		
		search: function (start) {
			var self = this;
			
			App.DataAccess.getReq(App.API.CONTACT.GET.SEARCH, {keyword:this.get('keyword'), start:start})
	            .then(function(data) {
	        	
                    self.setProperties({
	                	'contacts': data.contacts,
	                	'currentPage': data.currentPage,
	                	'nextPage': data.nextPage,
	                	'previousPage': data.previousPage,
	                	'totalPages': data.totalPages !== null ? data.totalPages : 0
	                });
	
	                return Ember.RSVP.resolve(data);
	            });
		},
		
		newEntity: function () {
			var _model = App.ModuleManager.getModel('contact');
			_model.firstname = null;
			_model.lastname = null;
			_model.email = null;
			_model.phone = null;
			_model.comment = null;
			
			this.set('model', _model);
		},
		
		editEntity: function (contact) {
			this.set('model', contact);
		},
		
		save: function () {
			var self = this,
				_model = this.get('model');
			
			App.confirm(this, function(){
				App.DataAccess.postReq(App.API.CONTACT.POST.SAVE, _model)
					.then(function(data){
					if(data.success){
						//update local data
						self.set('model', data.contact);
						self.send('search');
					}else{
						//TODO warning message
					}
					
					App.checkout(self);
				});
				
			});			
			
		},
		
		remove: function () {
			var self = this,
				_model = this.get('model'),
				uuid = _model.uuid;
			
			App.confirm(this, function(){
				App.DataAccess.deleteReq(App.API.CONTACT.DELETE.REMOVE, {uuid:_model.uuid})
					.then(function(data){
						if(data.success){
							self.send('newEntity');
							var index = -1, i=0;
				        	for(i;i<self.contacts.length;i++){
				                if(self.contacts[i].uuid === uuid){
				                    index = i;
				                    break;
				                }
				            }
				        	self.get('contacts').removeAt(index, 1);
						}
					
					App.checkout(self);
				});
			});	
		}
	}
	
});
