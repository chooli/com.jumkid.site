/**
 * Created by Chooli on 2/3/2015.
 */
App.FixturedataController = App.PageableAbstractController.extend({

    fixturedatas: null,

    keyword: '',

    uploadForm: function(){
        return Ember.$('#upload-form')[0];
    }.property(),

    disabled: function(){
        if (this.get('model') && this.get('model').uuid) return false;
        return true;
    }.property('model.uuid'),

    showProgress: function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = (evt.loaded / evt.total) * 100;
            Ember.$('#upload-progress').fadeIn("fast", function(){
                Ember.$('#upload-progress').html(Math.floor(percentComplete)+'%');
            });
        }
    },

    hideProgress: function () {
        Ember.$('#upload-progress').fadeOut("fast", function(){
            Ember.$('#upload-progress').html('');
        });
    },

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);
            App.DataAccess.postReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.SEARCH, {keyword:this.get('keyword'), facetField:'vlname',
                                                        facetPrefix:this.get('facetPrefix'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'fixturedatas': data.fixturedatas,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0,
                        'totalRecords': data.totalRecords !== null ? data.totalRecords : 0,
                        'facetFields': data.facetFields
                    });

                    App.checkout(self);
                });
        },

        editEntity: function(fixturedata){
            this.set('model', fixturedata);
        },

        newEntity: function(){
            this.send('resetModel');
        },

        save: function () {
            if(!App.ModuleManager.validateModel(this.get('model'), {
                    rules: {
                        vlname: "required",
                        vlvalue: "required"
                    },
                    messages: {
                        vlname: "Please enter the name",
                        vlvalue: "Please enter the value"
                    }
                })) return;

            var self = this,
                _model = this.get('model');

            App.checkin(self);
            App.DataAccess.postReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.SAVE, _model)
                .then(function(data){
                    if(data.success){
                        //update local data
                        self.set('model', data.fixturedata);
                    }
                    App.checkout(self);
                });
        },

        remove: function () {
            var self = this,
                _model = this.get('model'),
                uuid = _model.uuid;

            App.confirm(this, function(){
                App.DataAccess.deleteReq(App.API.ADMINTOOLS.FIXTUREDATA.DELETE.REMOVE, {uuid:_model.uuid})
                    .then(function(data){
                        if(data.success){
                            self.send('resetModel');
                            self.send('search', 0);
                        }

                        App.checkout(self);
                    });
            });
        },

        importFile: function(){
            var self = this,
                _form = this.get('uploadForm'),
                formData = new FormData(_form);

            if(_form.file.value.length < 1) return;

            App.checkin(self);
            App.DataAccess.uploadReq(App.API.ADMINTOOLS.FIXTUREDATA.POST.IMPORT, formData, this.showProgress)
                .then(function (data) {
                    if(data.success) {
                        _form.reset();
                        self.send('search', 0);
                        self.hideProgress();
                    }

                    App.checkout(self);
                });
        },

        resetFacet: function(){
            this.set('facetPrefix', '');
            this.send('search', 0);
        },

        resetModel: function() {
            var _model = App.ModuleManager.getFreshModel('fixturedata');
            Ember.set(_model, 'locale', App.FIXTURE.language[0].value);
            this.set('model', _model);
        }

    }

});