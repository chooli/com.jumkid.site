App.MediaEnlargeViewerComponent = Ember.Component.extend({

    elementId: 'media-enlarge-viewer',

    templateName: 'media-enlarge-viewer',

    mediafile: null,

    containerRoot: function(){
        return Ember.$('#'+this.get("elementId"));
    }.property(),

    containerDiv: function(){
        return Ember.$('#'+this.get("elementId")+" > div");
    }.property(),

    image: function(){
        return Ember.$('#media-enlarge-target');
    }.property(),

    src: function () {
        var url;
        if(this.get('mediafile')){
            url = App.DataAccess.assembleUrl(App.API.SHARE.GET.STREAM, {uuid:this.get('mediafile').uuid});
        }

        return url;
    }.property('mediafile'),

    actions: {

        show: function(){
            var self = this,
                containerRoot = this.get('containerRoot'),
                image = this.get('image');

            containerRoot.css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "visible"});

            image.one("load", function(){
                //reset container to fit window display area
                self.get('containerDiv').width(Ember.$(window).width() * 0.7);
                self.get('containerDiv').height(Ember.$(window).height() * 0.7);

                var scale = this.naturalWidth / this.naturalHeight,
                    containerWidth = self.get('containerDiv').width(),
                    containerHeight = self.get('containerDiv').height();

                image.width(this.naturalWidth);
                image.height(this.naturalHeight);

                if(image.width() > containerWidth){
                    image.width(containerWidth);
                    image.height(Math.round(containerWidth / scale));
                }
                if(image.height() > containerHeight){
                    image.height(containerHeight);
                    image.width(Math.round(containerHeight * scale));
                }
                self.get('containerDiv').width(image.width());
                self.get('containerDiv').height(image.height() + 28);

                //image.css('position', 'relative').css('top', Math.round((containerHeight - el.outerHeight()) / 2) + 'px');
                //image.css('left', Math.round((containerWidth - el.outerWidth()) / 2) + 'px');
            });

            image.attr("src", this.get('src'));
            image.css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "visible"});
        },

        close: function(){
            var containerRoot = this.get('containerRoot'),
                image = this.get('image');

            image.css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "hidden"});
            containerRoot.css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "hidden"});

            //set waiting image when loading the source
            image.attr("src", "images/admin/gray-loading.gif");
            image.width(128);
            image.height(128);
            this.get('containerDiv').width(image.width());
            this.get('containerDiv').height(image.height() + 28);
        }

    }

});
