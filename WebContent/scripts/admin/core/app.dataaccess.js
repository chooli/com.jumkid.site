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
