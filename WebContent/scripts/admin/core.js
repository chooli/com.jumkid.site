App = Ember.Application.create({
    //disable write out transition events to the log
    LOG_TRANSITIONS: false,
    
    SYSLang: SYSLang,
    
    currentPath: 'index',

    PROFILE: {

        appName: 'SiteStory',

        copyright: '2015 copyright by Jumkid Innovation',

        version: 0.3,

        menuItems: null

    },

    FIXTURE: {

        language: [
            {name: "English", value: "en"},
            {name: "中文", value: "zh_cn"}
        ],

        currency: [
            {name: "$", value: "$"},
            {name: "¥", value: "¥"},
            {name: "€", value: "€"},
            {name: "£", value: "£"}

        ],

        albumStyles: [
            {name: SYSLang.Gallery, value: "gallery"},
            {name: SYSLang.CD, value: "cd"},
            {name: SYSLang.Vedio, value: "video"}
        ],

        flyerStyles: [
            {name: SYSLang.Gallery, value: "gallery"},
            {name: SYSLang.Slide, value: "slider"}
        ]

    },

    FN: {

        isEmpty: function(str){
            return (!str || /^\s*$/.test(str));
        }

    }
    	
});

DS.ArrayTransform = DS.Transform.extend({
    serialize: function(serialized) {
        alert(Ember.typeOf(serialized));
        return serialized;
    },

    deserialize: function(deserialized) {
        alert(Ember.typeOf(deserialized));
        return deserialized;
    }
});

App.register('transform:array', DS.ArrayTransform);

App.API = Ember.Object.create({

    ROUTE: {
        INDEX: "index",
        ALBUM: "album",
        ALBUMS: "albums",
        BLOG: "blog",
        BLOGS: "blogs",
        FLYER: "flyer",
        FLYERS: "flyers",
        PRODUCT: "product",
        TRIP: "trip",
        TRIPS: "trips",
        ITINERARY: "itinerary",
        FILE: "file",
        FILES: "files",
        CONTACT: "contact",
        CONTACTS: "contacts",
        FRIEND: "friend",
        FRIENDS: "friends",
        USER: "user",
        USERS: "users",
        ADMINTOOLS: "admintools",
        FIXTUREDATA: "fixturedata"
    },

    APISPEC: {
        GET: {
            MODULE: '/apispec/module/{modulename}',
            SPEC: '/apispec/json',
            SITE: '/apispec/site'
        }

    },

    FILE: {
        GET: {
            SEARCH: '/file/search',
            INFO: '/file/info/{uuid}',
            THUMBNAIL: '/file/thumbnail/{uuid}',
            STREAM: '/file/stream/{uuid}',
            DOWLOAD: '/file/download/{uuid}'
        },

        POST: {
            LIST: '/file/list',
        	SAVE: '/file/save',
            UPLOAD: '/file/upload'
        },

        DELETE: {
            REMOVE: '/file/remove/{uuid}'
        }

    },
    
    SHARE: {
    	GET: {
    		INFO: '/file/i/{uuid}',
    		FILE: '/file/page/{uuid}',
    		STREAM: '/file/s/{uuid}',
    		THUMBNAIL: '/file/tmb/{uuid}',
    		DOWNLOAD: '/file/d/{uuid}'
    	}
    },

    ALBUM: {
        GET: {
            LOAD: '/album/load/{uuid}',
            SEARCH: '/album/search'
        },
        POST: {
            SAVE: '/album/save'
        },
        DELETE: {
            REMOVE: '/album/remove/{uuid}'
        }
    },
    
    BLOG: {
        GET: {
            LOAD: '/blog/load',
            STREAM: '/blog/stream/{uuid}',
            SEARCH: '/blog/search'
        },
        POST: {
            SAVE: '/blog/save'
        },
        DELETE: {
            REMOVE: '/blog/remove/{uuid}'
        }
    },

    FLYER: {
        GET: {
            LOAD: '/flyer/load/{uuid}',
            SEARCH: '/flyer/search'
        },
        POST: {
            SAVE: '/flyer/save'
        },
        DELETE: {
            REMOVE: '/flyer/remove/{uuid}'
        }
    },

    TRIP: {
        GET: {
            LOAD: '/trip/load/{uuid}',
            SEARCH: '/trip/search',
            PRINT: '/trip/print/{uuid}'
        },
        POST: {
            SAVE: '/trip/save',
            RECENT: '/trip/recent',
            SHARE: '/trip/share/{uuid}'
        },
        DELETE: {
            REMOVE: '/trip/remove/{uuid}'
        }
    },

    ITINERARY: {
        GET: {
            LOAD: '/itinerary/load'
        },
        POST: {
            LOAD: '/itinerary/load',
            SAVE: '/itinerary/save'
        },
        DELETE: {
            REMOVE: '/itinerary/remove/{uuid}'
        }
    },

    PRODUCT: {
        GET: {
            SEARCH: '/product/search',
            LOAD: '/product/load/{uuid}',
            STREAM: '/product/stream/{uuid}'
        },

        POST: {
            SAVE: '/product/save',
            UPLOAD: '/product/upload'
        },

        DELETE: {
            REMOVE: '/product/remove/{uuid}'
        }

    },

    SOCIALCOMMENTS: {
        POST: {
            LOAD: '/socialcomment/load',
            SAVE: '/socialcomment/save'
        },
        DELETE: {
            REMOVE: '/socialcomment/remove/{uuid}'
        }
    },
    
    CONTACT: {
    	GET: {
    		LOAD: '/contact/load',
    		SEARCH: '/contact/search'
    	},
    	POST: {
    		SAVE: '/contact/save'
    	},
    	DELETE: {
            REMOVE: '/contact/remove/{uuid}'
        }
    },

    USER: {
        GET: {
            LOAD: '/user/load/{id}',
            LOAD_CURRENT_USER: '/user/load-current-user', 
            ROLE: '/user/role',
            SEARCH: '/users/search/{keyword}',
            AVATAR: '/user/avatar/{username}'
        },
        POST: {
            EMAIL_EXISTS: '/user/email-exists',
            SIGNUP: '/user/signup',
            SAVE: '/user/save',
            RESET_PASS: '/user/reset-pass',
            USERNAME_EXISTS: '/user/username-exists'
        },
        DELETE: {
            REMOVE: '/users/remove/{id}'
        }

    },

    FRIENDS: {
        GET: {
            LOAD: "/friend/load/{username}",
            MY: "/friend/my",
            LIST: "/friend/list/{keyword}"
        },
        POST: {
            FIND: "/friend/find",
            INVITE: "/friend/invite",
            CONNECT: "/friend/connect",
            DISCONNECT: "/friend/disconnect"
        }
    },

    ADMINTOOLS: {

        FIXTUREDATA: {
            GET:{
                LOAD: '/fixturedata/load/{uuid}'
            },
            POST:{
                SEARCH: '/fixturedata/search',
                SAVE: '/fixturedata/save',
                IMPORT: '/fixturedata/import'
            },
            DELETE: {
                REMOVE: '/fixturedata/remove/{uuid}'
            }

        }

    },

    EVENT: {
        GET: {
            LOAD: "/event/load/{id}",
            FIRE: "/event/fire/{id}"
        },
        POST: {
            SAVE: "/event/save",
            LIST: "/event/list"
        },
        DELETE: {
            REMOVE: "/event/remove/{id}"
        }
    },

    DASHBOARD: {
        GET: {
            LOAD_RECENT_UPDATES: '/dashboard/load/updates'
        }
    }

});

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
/**
 * Created by Chooli on 1/13/2015.
 */
App.PageableAbstractController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    keyword: '',

    hasNoPreviouse: function () {
        return (this.get('previousPage') === null) ? true : false;
    }.property('previousPage'),

    hasNoNext: function () {
        return (this.get('nextPage') === null) ? true : false;
    }.property('nextPage'),

    currentPage: 0,

    totalPages: 0,

    totalRecords: 0,

    nextPage: null,

    previousPage: null,

    facetFields: null,

    facetPrefix: '',

    pagingInfo: function(){
        if (this.get('totalPages') === 0) return null;
        return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
    }.property('totalPages', 'currentPage'),

    actions: {

        typeSearch: function () {
            this.send('search');
        },

        nextPage: function () {
            this.send('search', this.get('nextPage'));
        },

        previousPage: function () {
            this.send('search', this.get('previousPage'));
        },

        search: null

    }

});

App.DataAccess = Ember.Object.create({
	
	needs: ['application'],

    currentUser: 'unknown',

    contextPath: '',

    servletPath: '',

    HTTP_GET: 'get',

    HTTP_POST: 'post',
    
    setup: function (contextPath, servletPath, currentUser) {
    	this.set('contextPath', contextPath);
    	this.set('servletPath', servletPath);
        this.set('currentUser', currentUser);
    	
    	App.ModuleManager = App._ModuleManager.create({
            //void
        });
    },
    
    postReq: function (api, params) {
        var url = this.assembleUrl(api, params);
        
        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        	Ember.$.ajax({
                url: url,
                type: "POST",
                data: params,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8"
            }).then(resolve)
  		      .fail(reject);
          }).catch(function(error) {
        	  window.location = "signin";
          });
       
        return _promise;
    },

    deleteReq: function (api, params) {
        var url = this.assembleUrl(api, params);

        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        	Ember.$.ajax({
                url: url,
                type: "DELETE",
                data: params,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8"
            }).then(resolve)
    		  .fail(reject);
          }).catch(function(error) {
        	  window.location = "signin";
          });

        return _promise;
    },

    uploadReq: function (api, params, showProgress) {
    	var url = this.assembleUrl(api, params);

    	var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
    		Ember.$.ajax({
                url: url,
                type: "POST",
                data: params,
                processData: false,  // tell jQuery not to process the data
                contentType: false,   // tell jQuery not to set contentType
                dataType: "json",
                beforeSend: function () {
                    //$("#progress").show();
                },
                xhr: function() {
                    var xhr = Ember.$.ajaxSettings.xhr();
                    if(xhr.upload){
                        xhr.upload.addEventListener('progress', showProgress, false);
                    } else {
                        console.log("Upload progress is not supported.");
                    }
                    return xhr;
                }
            }).then(resolve)
  		  	  .fail(reject);
          }).catch(function(error) {
        	  window.location = "signin";
          });
        
        return _promise;
    },

    getReq: function (api, params) {
    	var self = this,
        	url = this.assembleUrl(api, params);
        var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
        	Ember.$.getJSON(url, params)
        		.then(resolve)
        		.fail(reject);
          }).catch(function(error) {
        	  //App.__container__.lookup ('controller:application').send('confirm', function(){
        		  window.location = "signin";
        	  //}, SYSLang.FailedToLoad);              
          });
        
        return _promise;
    },
    
    htmlReq: function (api, params) {
    	var url = this.assembleUrl(api, params);
    	
    	var _promise = new Ember.RSVP.Promise(function(resolve, reject) {
    		Ember.$.ajax({
                url: url,
                type: "GET",
                data: params,
                dataType: 'html'
            }).then(resolve)
  		      .fail(reject);
          }).catch(function(error) {
        	  window.location = "signin";
          });
        
        return _promise;
    },

    assembleUrl: function (api, params, noPrefix) {
        var regEx = /\{[-_\w]+\}/g;
        var url = (!noPrefix) ? this.contextPath + this.servletPath + api : api;
        url = url.replace(regEx, function(str){
            var match = /[-_\w]+/g.exec(str);
            if(params && params[match[0]]) return params[match[0]];
            else return '';
        });
        return url;
    },

    getContextPath: function(){
        return this.get('contextPath');
    },

    setContextPath: function(contextPath){
        this.set('contextPath', contextPath);
    }

});

App.ModuleConfig = Ember.Object.extend({
    name: null,
    accessible: false,
    isDynamicModel: false,
    model: null
});

App._ModuleManager = Ember.Object.extend({

    site: '',

    modules: [
        App.ModuleConfig.create({name:App.API.ROUTE.FILE, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.ALBUM, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.BLOG, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.FLYER, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.TRIP, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.PRODUCT, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.USER, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.CONTACT, isDynamicModel:true, model: null}),
        App.ModuleConfig.create({name:App.API.ROUTE.FIXTUREDATA, isDynamicModel:true, model: null})
    ],

    init: function(){
        var self = this;
        //load site from server
        App.DataAccess.getReq(App.API.APISPEC.GET.SITE)
            .then(function(data){
                if(data.success) self.set('site', data.site);

                return Ember.RSVP.resolve(data);
            }).then(function(){
                var modules = self.get('dynamicModules');
                modules.forEach(function(item, index){
                    self.getModel(item.name);
                }, modules);

                return Ember.RSVP.resolve();
            });

    },

    //fire when update modules object
    modulesChanged: function () {
        alert('modules have change');
    }.observes('modules'),

    dynamicModules: function (){
        return this.get('modules').filterBy('isDynamicModel', true);
    }.property('modules.@each.isDynamicModel'),

    setModel: function (module, model) {
        var moduleConfig = this.get('modules').findBy('name', module);
        moduleConfig.set('model', model);
        return this;
    },

    getModel: function (module) {
        var moduleConfig = this.get('modules').findBy('name', module);
        if(moduleConfig.get('model')) return moduleConfig.get('model');

        if(moduleConfig.get('isDynamicModel')){ //build module model by meta data from server
            //TODO get api spec
            if(!moduleConfig.get('model')){
                var _promise = App.DataAccess.getReq(App.API.APISPEC.GET.MODULE, {modulename:module})
                    .then(function(data){
                        if(data.success){
                            moduleConfig.set('model', data.apispec.object);
                        }

                        return Ember.RSVP.resolve(data);
                    });
                return _promise;
            }else{
                return moduleConfig.get('model');
            }

        }else{
            return null;
        }
    },

    getFreshModel: function (module) {
        var _model = this.getModel(module);
        for(var property in _model){
            Ember.set(_model, property, null);
        }
        return _model;
    },

    validateModel: function (model, config) {
        var isValid = true,
            rules = config.rules;

        for (var rule in rules){
            var key = rule, value = rules[rule];

            var el = Ember.$(':input[name='+key+']');
            if (el && value === "required") {
                if(model[key]===null || model[key].length<1){
                    if(!el.hasClass('required')) el.addClass('required');
                    isValid = false;
                }else{
                    if(el.hasClass('required')) el.removeClass('required');
                }
            }
            if(el && value === "email"){
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(model[key])){
                    if(!el.hasClass('required')) el.addClass('required');
                    isValid = false;
                }else{
                    if(el.hasClass('required')) el.removeClass('required');
                }
            }
        }

        return isValid;
    }

});
