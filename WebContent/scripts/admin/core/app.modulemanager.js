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
