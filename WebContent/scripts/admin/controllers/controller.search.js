App.SearchController = Ember.ArrayController.extend({
	
	needs: ['application', 'index'],
	
	keyword: '*',
	
	mfiles: null,

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

	pageSize: 20,

	isPage20: function () {
		return this.get('pageSize')===20 ? true :  false;
	}.property('pageSize'),

	isPage50: function () {
		return this.get('pageSize')===50 ? true :  false;
	}.property('pageSize'),

	isPage80: function () {
		return this.get('pageSize')===80 ? true :  false;
	}.property('pageSize'),

	pagingInfo: function(){
		if (this.get('totalPages') === 0) return null;
		return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
	}.property('totalPages', 'currentPage'),

    actions: {

		nextPage: function () {
			this.send('search', this.get('nextPage'));
		},

		previousPage: function () {
			this.send('search', this.get('previousPage'));
		},

    	typeSearch: function () {
    		this.send('search');
    	},

		pageSearch: function (size) {
			this.set('pageSize', size);
			this.send('search');
		},

        search: function (start) {
        	var self = this;

			this.send('checkinProgress');

            App.DataAccess.getReq(App.API.FILE.GET.SEARCH, {keyword:this.get('keyword'), start:start, limit:this.get('pageSize')})
                .then(function(data) {

                    self.setProperties({
                    	'mfiles': data.mediafiles,
                    	'currentPage': data.currentPage,
                    	'nextPage': data.nextPage,
                    	'previousPage': data.previousPage,
                    	'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

					self.send('checkoutProgress');
            });

        },

        remove: function (uuid) {
            var index = -1, i=0;
        	for(i;i<this.mfiles.length;i++){
                if(this.mfiles[i].uuid === uuid){
                    index = i;
                    break;
                }
            }
        	this.get('mfiles').removeAt(index, 1);
        },

        replace: function (mediafile) {
        	var index = -1, i=0;
        	for(i;i<this.mfiles.length;i++){
                if(this.mfiles[i].uuid === mediafile.uuid){
                	this.mfiles[i] = mediafile;
                    break;
                }
            }
        },
        
        loadFile: function (mediafile) {
        	this.get('controllers.index').set('selectedfile', mediafile);
        }
	
    }

});

