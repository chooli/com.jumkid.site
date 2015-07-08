//top tab men for navigation tool bar
App.NavigationMenu = Ember.Object.extend({
    title: 'N/A',
    route: 'N/A',
    selected: false,
    url: '/',
    callback: null
});

App.RoleAdminMenus = [
    App.NavigationMenu.create({title: SYSLang.Recent, route: App.API.ROUTE.INDEX, url: '#/', selected: true}),
    App.NavigationMenu.create({title: SYSLang.Album, route: App.API.ROUTE.ALBUMS, url: '#/albums'}),
    App.NavigationMenu.create({title: SYSLang.Blog, route: App.API.ROUTE.BLOGS, url: '#/blogs'}),
    App.NavigationMenu.create({title: SYSLang.Flyer, route: App.API.ROUTE.FLYERS, url: '#/flyers'}),
    App.NavigationMenu.create({title: SYSLang.Trip, route: App.API.ROUTE.TRIPS, url: '#/trips'}),
    App.NavigationMenu.create({title: SYSLang.Contact, route: App.API.ROUTE.CONTACTS, url: '#/contacts'}),
    App.NavigationMenu.create({title: SYSLang.Friend, route: App.API.ROUTE.FRIENDS, url: '#/friends'}),
    App.NavigationMenu.create({title: SYSLang.MyAccount, route: App.API.ROUTE.USER, url: '#/user'}),
    App.NavigationMenu.create({title: SYSLang.AdminTools, route: App.API.ROUTE.ADMINTOOLS, url: '#/admintools'})
];
App.RoleUserMenus = [
    App.NavigationMenu.create({title: SYSLang.Recent, route: App.API.ROUTE.INDEX, url: '#/', selected: true}),
    App.NavigationMenu.create({title: SYSLang.Trip, route: App.API.ROUTE.TRIPS, url: '#/trips'}),
    App.NavigationMenu.create({title: SYSLang.Diary, route: App.API.ROUTE.BLOGS, url: '#/blogs'}),
    App.NavigationMenu.create({title: SYSLang.Album, route: App.API.ROUTE.ALBUMS, url: '#/albums'}),
    App.NavigationMenu.create({title: SYSLang.Friend, route: App.API.ROUTE.FRIENDS, url: '#/friends'}),
    App.NavigationMenu.create({title: SYSLang.MyAccount, route: App.API.ROUTE.USER, url: '#/user'})
];
App.RoleAgentMenus = [
    App.NavigationMenu.create({title: SYSLang.Recent, route: App.API.ROUTE.INDEX, url: '#/', selected: true}),
    App.NavigationMenu.create({title: SYSLang.Album, route: App.API.ROUTE.ALBUMS, url: '#/albums'}),
    App.NavigationMenu.create({title: SYSLang.Blog, route: App.API.ROUTE.BLOGS, url: '#/blogs'}),
    App.NavigationMenu.create({title: SYSLang.Flyer, route: App.API.ROUTE.FLYERS, url: '#/flyers'}),
    App.NavigationMenu.create({title: SYSLang.Friend, route: App.API.ROUTE.FRIENDS, url: '#/friends'}),
    App.NavigationMenu.create({title: SYSLang.MyAccount, route: App.API.ROUTE.USER, url: '#/user'})
];

App.NavigationMenuComponent = Ember.Component.extend({
	
	elementId: 'top_tab_bar',
	
	menuItems: [],

    menuItemsChange: function(){
        this.setRoute(App.get('currentPath'));
    }.observes('menuItems'),

    selectedMenu: null,

    selectedMenuChange: function(){
        var self = this;
        this.menuItems.forEach(function(item){
            item.set('selected', (self.get('selectedMenu')===item.route?true:false));
        });
    }.observes('selectedMenu'),
	
	didInsertElement: function() {
        //void
    },
    
    actions: {

        menuClick: function (menuItem) {
        	//switch selected item
        	//this.set('selectedMenu', menuItem.route);
            
            if (menuItem.callback){
                menuItem.callback.call(menuItem);
            }else{
                $(location).attr('href', menuItem.get('url'));
            }
        }

    },
    
    setRoute: function(route){
        if(this.menuItems){
            this.menuItems.forEach(function(item){
                item.set('selected', (item.route.indexOf(route) === 0 ? true : false));
            });
        }

    }
	
});