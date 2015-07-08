App.Router.map(function(){
	
	//this is a default route so it is optional
    this.route(App.API.ROUTE.INDEX, { path: '/' });

    this.resource(App.API.ROUTE.ALBUMS);
    this.resource(App.API.ROUTE.ALBUM);
    this.resource(App.API.ROUTE.BLOGS);
    this.resource(App.API.ROUTE.BLOG);
    this.resource(App.API.ROUTE.FLYER);
    this.resource(App.API.ROUTE.FLYERS);
    this.resource(App.API.ROUTE.TRIP);
    this.resource(App.API.ROUTE.TRIPS);
    this.resource(App.API.ROUTE.PRODUCT);
    this.resource(App.API.ROUTE.CONTACTS);
    this.resource(App.API.ROUTE.USER);
    this.resource(App.API.ROUTE.FRIENDS);

    this.route(App.API.ROUTE.ADMINTOOLS, { path: '/admintools' }, function(){
        this.resource(App.API.ROUTE.FIXTUREDATA);
    });
    
});