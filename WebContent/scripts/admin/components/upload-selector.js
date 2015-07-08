App.UploadSelectorComponent = Ember.Component.extend({

    elementId: 'file-upload-panel',

    mfiles: [],

    uploadPreview: false,

    multiple: true,

    uploadForm: function(){
        return Ember.$('#upload-form')[0];
    }.property(),

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

        upload: function () {
            var self = this,
                _form = this.get('uploadForm'),
                formData = new FormData(_form);

            if(_form.file.value.length < 1) return;

            this.sendAction('checkinProgress');

            App.DataAccess.uploadReq(App.API.FILE.POST.UPLOAD, formData, this.showProgress)
                .then(function (data) {
                    if(data.success) {
                        _form.reset();
                        if(!self.get('mfiles')) self.set('mfiles', []);
                        var mfiles = self.get('mfiles').concat(data.mfiles);
                        self.set('mfiles', mfiles);
                        self.hideProgress();
                    }

                    self.sendAction('checkoutProgress');
                }).then(function(){
                    self.sendAction('action');
                });

        },

        remove: function(uuid){
            var self = this,
                mfiles = self.get('mfiles');

            self.sendAction('confirm', function(){
                //remove file from the system
                App.DataAccess.deleteReq(App.API.FILE.DELETE.REMOVE, {uuid:uuid})
                    .then(function (data) {
                        var newMfiles = [];
                        for(i=0;i<mfiles.length;i++){
                            if(mfiles[i].uuid !== uuid) {
                                newMfiles.push(mfiles[i]);
                            }
                        }
                        self.set('mfiles', newMfiles);
                        self.sendAction('checkoutProgress');
                        mfiles = null;
                    });

            });

        },

        download: function(uuid){
            var url = App.DataAccess.assembleUrl(App.API.FILE.GET.DOWLOAD, {uuid:uuid});
            window.location = url;
        }

    },

    willDestroyElement: function(){
        this.set('mfiles', null);
    }

});