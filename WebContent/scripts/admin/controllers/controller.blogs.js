App.BlogsController = App.PageableAbstractController.extend({
	
	needs: ['blog'],

	blogs: null,

	actions: {
		
		typeSearch: function () {
    		this.send('search');
    	},
		
		search: function (start) {
			var self = this;
			
			App.checkin(self);
			
			App.DataAccess.getReq(App.API.BLOG.GET.SEARCH, {keyword:this.get('keyword'), start:start})
	            .then(function(data) {
	        	
                    self.setProperties({
	                	'blogs': data.blogs,
	                	'currentPage': data.currentPage,
	                	'nextPage': data.nextPage,
	                	'previousPage': data.previousPage,
	                	'totalPages': data.totalPages !== null ? data.totalPages : 0
	                });
	
                    App.checkout(self);
	            });
		},

		newBlog: function () {
			var self = this;
			this.transitionToRoute('/blog').then(function(){
				self.get('controllers.blog').send('newEntity');
			});
		},
		
		editBlog: function (blog) {
			var self = this;
			this.transitionToRoute('/blog').then(function(){
				self.get('controllers.blog').set('model', null);
				self.get('controllers.blog').send('editEntity', blog.uuid);
			});
		}

	}
	
});
