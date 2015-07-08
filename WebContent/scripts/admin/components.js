/**
 * Created by Chooli on 1/16/2015.
 */
App.CalendarDateField = Ember.TextField.extend({

    classNames: ['date'],

    picker: null,

    minDate: null,

    minDateChange: function(){
        this.get('picker').setMinDate(moment(this.get('minDate')).toDate());
    }.observes("minDate"),

    updateValues: (function() {
        var date;
        date = moment(this.get("value"));
        if (date.isValid()) {
            this.set("date", date.toDate());
            return this.set("valid", true);
        } else {
            this.set("date", null);
            return this.set("valid", false);
        }
    }).observes("value"),

    didInsertElement: function() {
        var _picker = new Pikaday({
            field: this.$()[0],
            format: 'YYYY-MM-DD',
            minDate: moment(this.get('minDate')).toDate()
        });
        this.set("picker", _picker);
    },

    willDestroyElement: function(){
        _picker = this.get("picker");
        if (_picker) {
            _picker.destroy();
        }
        this.set("picker", null);
    }

});

App.CKEditor = Ember.TextArea.extend({

	elementId: 'html_editor',

	isVisible: false,

	editor: null,

	valueChange: function(){
		var self = this,
			elementId = this.get('elementId');

		if(this.get('editor')){
			if(!this.get('value')) this.get('editor').setData("");
			return;
		}

		this.set('editor', CKEDITOR.replace( elementId, {
			allowedContent: true,
			height: '410px',
			toolbar: [
				{ name: 'document', items: [ 'Source', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
				{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
				{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
				{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
				{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ] },
				{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
				{ name: 'colors', items : [ 'TextColor','BGColor' ] },
				{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] }
			]
		}));

		this.get('editor').on('blur', function(e) {
			if (e.editor.checkDirty()) {
				self.set('value', self.get('editor').getData() );
			}
		});
		// Prevent drag-and-drop.
		this.get('editor').on('dialogShow', function (ev) {
			var dialog = ev.data;

			if ( dialog.getName() == 'image' ){
				dialog.dontResetSize = false;
				var imgUrl = dialog.getValueOf( 'info', 'txtUrl');
				if(imgUrl.indexOf("file/tmb")!=-1 && imgUrl.indexOf("?large=true")<0){
					imgUrl = imgUrl.substring(imgUrl.indexOf(App.DataAccess.getContextPath()));
					dialog.setValueOf( 'info', 'txtUrl', imgUrl+'?large=true' );

				}

			}

		});

	}.observes('value'),

	didInsertElement: function() {
		//this.set('value', " ");
		this.sendAction('action');
	},

	willDestroyElement: function(){
		CKEDITOR.instances[this.get('elementId')].destroy(true);
	}
	
});
App.DialogWidgetComponent = App.PopUpComponent.extend({
	
	elementId: 'dialog',

	confirmMessage: null,
	
	message: function(){
		return this.get('confirmMessage') || SYSLang.AreYouSure;
	}.property('confirmMessage'),
	
	callback: null,

	actions: {
		
		doYes: function () {
			this.get('callback').call(this);
			this.set('isConfirm', false);
		},
		
		doNo: function () {
			this.set('isConfirm', false);
		}
		
	}
	
	
});
App.ItineraryAttributeTypeRadioComponent = Ember.Component.extend({

    classNames: ['itinerary-attribute-radio-group'],

    attributeType: null

});
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

//web viewer for multiple type of media files
App.MediaViewerComponent = Ember.Component.extend({
	
  elementId: 'content_title_panel',

  viewerId: 'content_viewport',

  containerWidth: "410",
  
  containerHeight: "410",
  
  divStyle: function () {
	  return "overflow:auto;width:"+this.get('containerWidth')+";height:"+this.get('containerHeight')+";";
  }.property(),

  mediafile: null,

  src: function () {
	  var url;
	  if(this.get('mediafile')){
		  url = App.DataAccess.assembleUrl(App.API.SHARE.GET.STREAM, {uuid:this.get('mediafile').uuid});
	  }
	  
	  return url;
  }.property('mediafile'),

  thumbnailLarge: function () {
	  var url;
	  if(this.get('mediafile')){
		  url = App.DataAccess.assembleUrl(App.API.SHARE.GET.THUMBNAIL, {uuid:this.get('mediafile').uuid})+"?large=true";
	  }

	  return url;
  }.property('mediafile'),

  type: function () {
	  if(this.get('mediafile'))
		  return this.get('mediafile').mimeType;
	  else
		  return null;
  }.property('mediafile'),

  alt: function(){
	  if(this.get('mediafile'))
		  return this.get('mediafile').title;
	  else
		  return null;
  }.property('mediafile'),

  showVideo: function(){
    return (this.get('mediafile') && this.get('type').indexOf("video") === 0) ? true : false;
  }.property('mediafile'),

  showImage: function(){
    return (this.get('mediafile') && this.get('type').indexOf("image") === 0) ? true : false;
  }.property('mediafile'),
  
  showAudio: function(){
    return (this.get('mediafile') && this.get('type').indexOf("audio") === 0) ? true : false;
  }.property('mediafile'),
  
  showHtml: function(){
	if(!this.get('mediafile')) return false;
    return (this.get('type').indexOf("html") !== -1 ||
    		this.get('type').indexOf("xml") !== -1 ||
    		this.get('type').indexOf("json") !== -1) ? true : false;
  }.property('mediafile'),

  showPdf: function(){
    return (this.get('mediafile') && this.get('type').indexOf("pdf") !== -1) ? true : false;
  }.property('mediafile'),

  mediafileChange: function(){
      this.rerender();
      if(this.mediafile) Ember.run.scheduleOnce('afterRender', this, 'applyPlugins');
  }.observes('mediafile'),

  applyPlugins: function () {
		var el = Ember.$('#'+this.get("viewerId")),
			containerWidth = this.get('containerWidth'), containerHeight = this.get('containerHeight'),
			mimeType = this.get('mediafile').mimeType;
		
		var self = this;
		
		if (mimeType.indexOf("image") === 0) {
			
			el.load(function () {
				if(el.width() > el.height()){
					el.width(containerWidth);
				}else{
					el.height(containerHeight);
				}

				el.css({ opacity: 0 }).animate({ opacity: 1 }, "fast").css({ visibility: "visible"});
				Ember.$('#content_viewer_panel').css('text-align', 'center');
				
				el.css('position', 'relative').css('top', Math.round((containerHeight - el.outerHeight()) / 2) + 'px');
				el.css('left', Math.round((containerWidth - el.outerWidth()) / 2) + 'px');

			});
			
			
		}else
		if (mimeType.indexOf("video") === 0 || mimeType.indexOf("audio") === 0) {
			//TODO
			
		}else
		if(mimeType.indexOf("html") !== -1){
			App.DataAccess.htmlReq(App.API.FILE.GET.STREAM, {uuid:this.mediafile.uuid})
				.then(function(data) {
					el.text(data);
					//load 3pty code viewer
					prettyPrint();
					return Ember.RSVP.resolve(data);
			});
		}else
		if (mimeType.indexOf("pdf") !== -1) {
			new PDFObject({
				url: App.DataAccess.assembleUrl(App.API.FILE.GET.STREAM, {uuid:this.mediafile.uuid}),
				id: "myPDF",
				width: containerWidth,
				height: containerHeight,
				pdfOpenParams: {
					navpanes: 1,
					statusbar: 0,
					view: "FitH",
					pagemode: "thumbs"
				}
			}).embed(this.get("viewerId"));
		}else
		if (mimeType.indexOf("xml") !== -1 || mimeType.indexOf("json") !== -1) {
			App.DataAccess.htmlReq(App.API.FILE.GET.STREAM, {uuid:this.mediafile.uuid})
				.then(function(data) {
					el.text(data);
					//load 3pty code viewer
					prettyPrint();
					return Ember.RSVP.resolve(data);
			});
		}
  },

  actions: {

	  enlarge: function(){
		  var mediaEnlargeViewer = App.MediaEnlargeViewerComponent.create();
		  mediaEnlargeViewer.set('mediafile', this.get('mediafile'));
		  mediaEnlargeViewer.send("show");
	  },

	  save: function(){
		  var self = this;
		  App.DataAccess.postReq(App.API.FILE.POST.SAVE, this.get('mediafile'));
	  }

  }

  
});
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
/**
 * Created by Chooli on 1/13/2015.
 */
App.ProductUploaderComponent = Ember.Component.extend({

    elementId: 'product-upload-panel',

    products: null,

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

            App.DataAccess.uploadReq(App.API.PRODUCT.POST.UPLOAD, formData, this.showProgress)
                .then(function (data) {
                    if(data.success) {
                        _form.reset();
                        var products = self.get('products').concat(data.products);
                        self.set('products', products);
                        self.hideProgress();
                    }

                    self.sendAction('checkoutProgress');
                }).then(function(){
                    self.sendAction('action');
                });

        },

        remove: function(uuid){
            var self = this,
                products = self.get('products');

            self.sendAction('confirm', function(){
                //remove file from the system
                App.DataAccess.deleteReq(App.API.PRODUCT.DELETE.REMOVE, {uuid:uuid})
                    .then(function (data) {
                        var newProducts = [];
                        for(i=0;i<products.length;i++){
                            if(products[i].uuid !== uuid) {
                                newProducts.push(products[i]);
                            }
                        }
                        self.set('products', newProducts);
                        self.sendAction('checkoutProgress');
                        products = null;
                    });

            });


        }

    },

    willDestroyElement: function(){
        this.set('products', null);
    }

});

/**
 * Created by Chooli on 1/13/2015.
 */
App.ProductViewerComponent = App.MediaViewerComponent.extend({

    elementId: 'product_viewer_panel',

    didInsertElement: function(){
        // Set up the number formatting.
        Ember.$('input[name=regularPrice]').number( true, 2 );
        Ember.$('input[name=salePrice]').number( true, 2 );
        Ember.$('input[name=discountRate]').number( true, 0 );
    }

});
/**
 * Ember select-2 component wrapping the jQuery select2 plugin while
 * respecting Ember data bindings and getter/setter methods on the content.
 *
 * Terminology:
 *  - Value: The currently selected value(s). Propagated to controllers etc.
 *    through the "value=..."" binding. Types:
 *    - Object: when using select-2 without any further configuration
 *    - Array of Objects: when using select-2 with "multiple=true"
 *    - Mixed: when using select-2 with "optionValuePath=..."
 *    - Array of Mixed: when using select-2 with "multiple=true" and
 *      "optionValuePath=..."
 *
 *  - Content: Array of Objects used to present to the user for choosing the
 *    selected values. "content" cannot be an Array of Strings, the Objects are
 *    expected to have an "id" and a property to be used as the label (by default,
 *    it is "text", but it can be overwritten it via "optionLabelPath"). These
 *    properties can be computed properties or just plain JavaScript values.
 */
App.Select2Component = Ember.Component.extend({
    tagName: "input",
    classNames: ["form-control"],
    classNameBindings: ["inputSize"],
    attributeBindings: ["style"],
    style: "display: hidden;",

    // Bindings that may be overwritten in the template
    inputSize: "input-md",
    cssClass: null,
    optionValuePath: null,
    optionLabelPath: 'text',
    optionDescriptionPath: 'description',
    placeholder: null,
    minimumResultsForSearch: null,
    multiple: false,
    allowClear: false,
    enabled: true,
    query: null,
    typeaheadSearchingText: 'Searching…',
    typeaheadNoMatchesText: 'No matches found',
    typeaheadErrorText: 'Loading failed',

    formatResult: null,
    formatSelection: null,

    // internal state
    _hasSelectedMissingItems: false,
    _hasPendingContentPromise: Ember.computed.alias('content.isPending'),
    _hasFailedContentPromise: Ember.computed.alias('content.isRejected'),
    _hasPendingValuePromise: Ember.computed.alias('value.isPending'),
    _hasFailedValuePromise: Ember.computed.alias('value.isRejected'),
    _typeaheadMode: Ember.computed.bool('query'),

    didInsertElement: function() {
        var self = this,
            options = {},
            optionLabelPath = this.get('optionLabelPath'),
            optionDescriptionPath = this.get('optionDescriptionPath'),
            content = this.get('content');


        // ensure select2 is loaded
        Ember.assert("select2 has to exist on Ember.$.fn.select2", Ember.$.fn.select2);

        // setup
        options.placeholder = this.get('placeholder');
        options.minimumResultsForSearch = this.get('minimumResultsForSearch');
        options.multiple = this.get('multiple');
        options.allowClear = this.get('allowClear');
        options.theme = "classic";

        // allowClear is only allowed with placeholder
        Ember.assert("To use allowClear, you have to specify a placeholder", !options.allowClear || options.placeholder);

        /*
         Formatting functions that ensure that the passed content is escaped in
         order to prevent XSS vulnerabilities. Escaping can be avoided by passing
         Handlebars.SafeString as "text" or "description" values.
         Generates the html used in the dropdown list (and is implemented to
         include the description html if available).
         */
        options.formatResult = this.get('formatResult') || function(item) {
            if (!item) {
                return;
            }

            var id = Ember.get(item, "id"),
                text = Ember.get(item, optionLabelPath),
                description = Ember.get(item, optionDescriptionPath),
                output = Ember.Handlebars.Utils.escapeExpression(text);

            // only for "real items" (no group headers) that have a description
            if (id && description) {
                output += " <span class=\"text-muted\">" +
                Ember.Handlebars.Utils.escapeExpression(description) + "</span>";
            }

            return output;
        };

        /*
         Generates the html used in the closed select input, displaying the
         currently selected element(s). Works like "formatResult" but
         produces shorter output by leaving out the description.
         */
        options.formatSelection = this.get('formatSelection') || function(item) {
            if (!item) {
                return;
            }

            var text = Ember.get(item, optionLabelPath);

            // escape text unless it's passed as a Handlebars.SafeString
            return Ember.Handlebars.Utils.escapeExpression(text);
        };

        /*
         Provides a list of items that should be displayed for the current query
         term. Uses the default select2 matcher (which handles diacritics) with the
         Ember compatible getter method for optionLabelPath.
         */
        options.query = function(query) {
            var select2 = this;

            if (self.get('_typeaheadMode')) {
                var deferred = Ember.RSVP.defer('select2#query: ' + query.term);

                self.sendAction('query', query, deferred);

                deferred.promise.then(function(data) {
                    if (data instanceof Ember.ArrayProxy) {
                        data = data.toArray();
                    }
                    //fix for server return updates array
                    self.set('content', data);

                    query.callback({
                        results: data
                    });
                }, function(reason) {
                    query.callback({
                        hasError: true,
                        errorThrown: reason
                    });
                });
            } else {
                Ember.assert("select2 has no content!", self.get('content'));

                var filteredContent = self.get("content").reduce(function(results, item) {
                    // items may contain children, so filter them, too
                    var filteredChildren = [];

                    if (item.children) {
                        filteredChildren = item.children.reduce(function(children, child) {
                            if (select2.matcher(query.term, Ember.get(child, optionLabelPath))) {
                                children.push(child);
                            }
                            return children;
                        }, []);
                    }

                    // apply the regular matcher
                    if (select2.matcher(query.term, Ember.get(item, optionLabelPath))) {
                        // keep this item either if itself matches
                        results.push(item);
                    } else if (filteredChildren.length) {
                        // or it has children that matched the term
                        var result = Ember.$.extend({}, item, { children: filteredChildren });
                        results.push(result);
                    }
                    return results;
                }, []);

                query.callback({
                    results: filteredContent
                });
            }
        };

        /*
         Supplies the string used when searching for options, can be set via
         `typeaheadSearchingText`
         */
        options.formatSearching = function() {
            var text = self.get('typeaheadSearchingText');

            return Ember.String.htmlSafe(text);
        };

        /*
         Format the no matches message, substituting the %@ placeholder with the
         html-escaped user input
         */
        options.formatNoMatches = function(term) {
            var text = self.get('typeaheadNoMatchesText');
            if (text instanceof Ember.Handlebars.SafeString) {
                text = text.string;
            }

            term = Ember.Handlebars.Utils.escapeExpression(term);

            return Ember.String.htmlSafe(Ember.String.fmt(text, term));
        };

        /*
         Format the error message, substituting the %@ placeholder with the promise
         rejection reason
         */
        options.formatAjaxError = function(jqXHR, textStatus, errorThrown) {
            var text = self.get('typeaheadErrorText');

            return Ember.String.htmlSafe(Ember.String.fmt(text, errorThrown));
        };

        /*
         Maps "value" -> "object" when using select2 with "optionValuePath" set,
         and one time directly when setting up the select2 plugin even without "oVP".
         (but with empty value, which will just skip the method)
         Provides an object or an array of objects (depending on "multiple") that
         are referenced by the current select2 "val".
         When there are keys that can not be matched to objects, the select2 input
         will be disabled and a warning will be printed on the console.
         This is important in case the "content" has yet to be loaded but the
         "value" is already set and must not be accidentally changed because the
         inout cannot yet display all the options that are required.
         To disable this behaviour, remove those keys from "value" that can't be
         matched by objects from "content".
         */
        options.initSelection = function(element, callback) {
            var value = element.val(),
                content = self.get("content"),
                contentIsArrayProxy = Ember.ArrayProxy.detectInstance(content),
                multiple = self.get("multiple"),
                optionValuePath = self.get("optionValuePath");

            if (!value || !value.length) {
                return callback([]);
            }

            // this method should not be needed without the optionValuePath option
            // but make sure there is an appropriate error just in case.
            Ember.assert("select2#initSelection has been called without an \"" +
            "optionValuePath\" set.", optionValuePath);

            Ember.assert("select2#initSelection can not map string values to full objects " +
                "in typeahead mode. Please open a github issue if you have questions to this.",
                !self.get('_typeaheadMode'));


            var values = value.split(","),
                filteredContent = [];

            // for every object, check if its optionValuePath is in the selected
            // values array and save it to the right position in filteredContent
            var contentLength = Ember.get(content, 'length'),
                unmatchedValues = values.length,
                matchIndex;

            // START loop over content
            for (var i = 0; i < contentLength; i++) {
                var item = contentIsArrayProxy ? content.objectAt(i) : content[i];
                matchIndex = -1;

                if (item.children && item.children.length) {
                    // take care of either nested data...
                    for (var c = 0; c < item.children.length; c++) {
                        var child = item.children[c];
                        matchIndex = values.indexOf("" + Ember.get(child, optionValuePath));
                        if (matchIndex !== -1) {
                            filteredContent[matchIndex] = child;
                            unmatchedValues--;
                        }
                        // break loop if all values are found
                        if (unmatchedValues === 0) {
                            break;
                        }
                    }
                } else {
                    // ...or flat data structure: try to match simple item
                    matchIndex = values.indexOf("" + Ember.get(item, optionValuePath));
                    if (matchIndex !== -1) {
                        filteredContent[matchIndex] = item;
                        unmatchedValues--;
                    }
                    // break loop if all values are found
                    if (unmatchedValues === 0) {
                        break;
                    }
                }
            }
            // END loop over content

            if (unmatchedValues === 0) {
                self.set('_hasSelectedMissingItems', false);
            } else {
                // disable the select2 element if there are keys left in the values
                // array that were not matched to an object
                self.set('_hasSelectedMissingItems', true);

                Ember.warn("select2#initSelection was not able to map each \"" +
                optionValuePath +"\" to an object from \"content\". The remaining " +
                "keys are: " + values + ". The input will be disabled until a) the " +
                "desired objects is added to the \"content\" array or b) the " +
                "\"value\" is changed.", !values.length);
            }

            if (multiple) {
                // return all matched objects
                return callback(filteredContent);
            } else {
                // only care about the first match in single selection mode
                return callback(filteredContent.get('firstObject'));
            }
        };

        /*
         Forward a custom css class to the components container and dropdown.
         The value will be read from the `cssClass` binding
         */
        options.containerCssClass = options.dropdownCssClass = function() {
            return self.get('cssClass') || '';
        };

        options.createSearchChoice = function(term, data) {
            if ( $(data).filter( function() {
                    return this.text.localeCompare(term)===0;
                }).length===0) {
                return {id:term, text:term};
            }
        };

        this._select = this.$().select2(options);

        this._select.on("change", function() {
            // grab currently selected data from select plugin
            var data = self._select.select2("data");
            // call our callback for further processing
            self.selectionChanged(data);
        });

        this.addObserver('content.[]', this.valueChanged);
        this.addObserver('content.@each.' + optionLabelPath, this.valueChanged);
        this.addObserver('content.@each.' + optionDescriptionPath, this.valueChanged);
        this.addObserver('value', this.valueChanged);

        // trigger initial data sync to set select2 to the external "value"
        this.valueChanged();

        // eventually disable input when content is PromiseProxy
        if (Ember.PromiseProxyMixin.detect(content)) {
            // enabling/siabling is done via binding to _hasPendingContentPromise
            // provide error for rejected promise, though.
            content.then(null, function (reason) {
                Ember.warn("select2: content promise was reject with reason " + reason +
                ". Recovering from this is not (yet) implemented.");
            });
        }

        this.watchDisabled();
    },

    /**
     * Teardown to prevent memory leaks
     */
    willDestroyElement: function() {
        // If an assertion caused the component not to render, we can't remove it from the dom.
        if(this._select) {
            this._select.off("change");
            this._select.select2("destroy");
        }

        this.removeObserver('content.[]', this.valueChanged);
        this.removeObserver(
            'content.@each.' + this.get('optionLabelPath'),
            this.valueChanged
        );
        this.removeObserver(
            'content.@each.' + this.get('optionDescriptionPath'),
            this.valueChanged
        );
        this.removeObserver('value', this.valueChanged);
    },

    /**
     * Respond to selection changes originating from the select2 element. If
     * select2 is working with full objects just use them to set the value,
     * use the optionValuePath otherwise.
     *
     * @param  {String|Object} data   Currently selected value
     */
    selectionChanged: function(data) {
        var value,
            multiple = this.get("multiple"),
            optionValuePath = this.get("optionValuePath");

        // if there is a optionValuePath, don't set value to the complete object,
        // but only the property referred to by optionValuePath
        if (optionValuePath) {
            if (multiple) {
                // data is an array, so use getEach
                value = data.getEach(optionValuePath);
            } else {
                // treat data as a single object
                value = Ember.get(data, optionValuePath);
            }
        } else {
            value = data;
        }

        this.set("value", value);
    },

    /**
     * Respond to external value changes. If select2 is working with full objects,
     * use the "data" API, otherwise just set the "val" property and let the
     * "initSelection" figure out which object was meant by that.
     */
    valueChanged: function() {
        var self = this,
            value = this.get("value"),
            optionValuePath = this.get("optionValuePath");

        if (Ember.PromiseProxyMixin.detect(value)) {
            // schedule re-setting value after promise is settled
            value.then(function(value) {
                if (value === null || value === undefined) {
                    self._select.select2("val", null);
                }
            }, function(reason) {
                Ember.warn("select2: value promise was reject with reason " + reason +
                ". Recovering from this is not (yet) implemented.");
            });
        }

        if (optionValuePath) {
            // when there is a optionValuePath, the external value is a primitive value
            // so use the "val" method
            this._select.select2("val", value);
        } else {
            // otherwise set the full object via "data"
            this._select.select2("data", value);
        }
    },

    /**
     * Watch properties that determine the disabled state of the input.
     */
    watchDisabled: Ember.observer(
        '_hasSelectedMissingItems',
        '_hasPendingContentPromise',
        '_hasFailedContentPromise',
        '_hasPendingValuePromise',
        '_hasFailedValuePromise',
        'enabled',
        function() {
            var select = this._select,
                disabled = this.get('_hasSelectedMissingItems') ||
                    this.get('_hasPendingContentPromise') ||
                    this.get('_hasFailedContentPromise') ||
                    this.get('_hasPendingValuePromise') ||
                    this.get('_hasFailedValuePromise') ||
                    !this.get('enabled');

            if (select) {
                Ember.run(function() {
                    select.select2("readonly", disabled);
                });
            }
        }
    )
});
App.SelectColorcodeComponent = App.Select2Component.extend({

    allowClear: true,

    placeholder: "Please select a color",

    minimumResultsForSearch: Infinity,

    content:[
        {id:"99CCFF", text:"#99CCFF"},
        {id:"FFCCCC", text:"#FFCCCC"},
        {id:"FFFF66", text:"#FFFF66"},
        {id:"66FFCC", text:"#66FFCC"},
        {id:"CC99FF", text:"#CC99FF"}
    ],

    formatResult: function(item){
        if(!item) return "<div style='background:#ededed;'>&nbsp;</div>";
        return "<div style='background:"+item.text+";'>&nbsp;</div>";
    },

    formatSelection: function(item){
        if(!item) return "<div style='background:#ededed;'>&nbsp;</div>";
        return "<div style='background:"+item.text+";'>&nbsp;</div>";
    }

});
/**
 * Created by Chooli on 2/5/2015.
 */
App.SelectCountryComponent = App.Select2Component.extend({

    allowClear: true,

    placeholder: "Please type to search",

    minimumInputLength: 1,

    formatResult: function(item){
        return "<span style='font-size:14px;'>"+item.text+"</span>";
    },

    formatSelection: function(item){
        return "<span style='font-size:16px;'>"+item.text+"</span>";
    }

});
/**
 * Created by Chooli on 2/5/2015.
 */
App.SelectDaytimeComponent = App.Select2Component.extend({

    allowClear: false,

    content:[
        {id: "12:00", text: "12:00 AM"},
        {id: "12:15", text: "12:15 AM"},
        {id: "12:30", text: "12:30 AM"},
        {id: "12:45", text: "12:45 AM"},
        {id: "1:00", text: "1:00 AM"},
        {id: "1:15", text: "1:15 AM"},
        {id: "1:30", text: "1:30 AM"},
        {id: "1:45", text: "1:45 AM"},
        {id: "2:00", text: "2:00 AM"},
        {id: "2:15", text: "2:15 AM"},
        {id: "2:30", text: "2:30 AM"},
        {id: "2:45", text: "2:45 AM"},
        {id: "3:00", text: "3:00 AM"},
        {id: "3:15", text: "3:15 AM"},
        {id: "3:30", text: "3:30 AM"},
        {id: "3:45", text: "3:45 AM"},
        {id: "4:00", text: "4:00 AM"},
        {id: "4:15", text: "4:15 AM"},
        {id: "4:30", text: "4:30 AM"},
        {id: "4:45", text: "4:45 AM"},
        {id: "5:00", text: "5:00 AM"},
        {id: "5:15", text: "5:15 AM"},
        {id: "5:30", text: "5:30 AM"},
        {id: "5:45", text: "5:45 AM"},
        {id: "6:00", text: "6:00 AM"},
        {id: "6:15", text: "6:15 AM"},
        {id: "6:30", text: "6:30 AM"},
        {id: "6:45", text: "6:45 AM"},
        {id: "7:00", text: "7:00 AM"},
        {id: "7:15", text: "7:15 AM"},
        {id: "7:30", text: "7:30 AM"},
        {id: "7:45", text: "7:45 AM"},
        {id: "8:00", text: "8:00 AM"},
        {id: "8:15", text: "8:15 AM"},
        {id: "8:30", text: "8:30 AM"},
        {id: "8:45", text: "8:45 AM"},
        {id: "9:00", text: "9:00 AM"},
        {id: "9:15", text: "9:15 AM"},
        {id: "9:30", text: "9:30 AM"},
        {id: "9:45", text: "9:45 AM"},
        {id: "10:00", text: "10:00 AM"},
        {id: "10:15", text: "10:15 AM"},
        {id: "10:30", text: "10:30 AM"},
        {id: "10:45", text: "10:45 AM"},
        {id: "11:00", text: "11:00 AM"},
        {id: "11:15", text: "11:15 AM"},
        {id: "11:30", text: "11:30 AM"},
        {id: "11:45", text: "11:45 AM"},
        {id: "12:00", text: "12:00 PM"},
        {id: "12:15", text: "12:15 PM"},
        {id: "12:30", text: "12:30 PM"},
        {id: "12:45", text: "12:45 PM"},
        {id: "13:00", text: "1:00 PM"},
        {id: "13:15", text: "1:15 PM"},
        {id: "13:30", text: "1:30 PM"},
        {id: "13:45", text: "1:45 PM"},
        {id: "14:00", text: "2:00 PM"},
        {id: "14:15", text: "2:15 PM"},
        {id: "14:30", text: "2:30 PM"},
        {id: "14:45", text: "2:45 PM"},
        {id: "15:00", text: "3:00 PM"},
        {id: "15:15", text: "3:15 PM"},
        {id: "15:30", text: "3:30 PM"},
        {id: "15:45", text: "3:45 PM"},
        {id: "16:00", text: "4:00 PM"},
        {id: "16:15", text: "4:15 PM"},
        {id: "16:30", text: "4:30 PM"},
        {id: "16:45", text: "4:45 PM"},
        {id: "17:00", text: "5:00 PM"},
        {id: "17:15", text: "5:15 PM"},
        {id: "17:30", text: "5:30 PM"},
        {id: "17:45", text: "5:45 PM"},
        {id: "18:00", text: "6:00 PM"},
        {id: "18:15", text: "6:15 PM"},
        {id: "18:30", text: "6:30 PM"},
        {id: "18:45", text: "6:45 PM"},
        {id: "19:00", text: "7:00 PM"},
        {id: "19:15", text: "7:15 PM"},
        {id: "19:30", text: "7:30 PM"},
        {id: "19:45", text: "7:45 PM"},
        {id: "20:00", text: "8:00 PM"},
        {id: "20:15", text: "8:15 PM"},
        {id: "20:30", text: "8:30 PM"},
        {id: "20:45", text: "8:45 PM"},
        {id: "21:00", text: "9:00 PM"},
        {id: "21:15", text: "9:15 PM"},
        {id: "21:30", text: "9:30 PM"},
        {id: "21:45", text: "9:45 PM"},
        {id: "22:00", text: "10:00 PM"},
        {id: "22:15", text: "10:15 PM"},
        {id: "22:30", text: "10:30 PM"},
        {id: "22:45", text: "10:45 PM"},
        {id: "23:00", text: "11:00 PM"},
        {id: "23:15", text: "11:15 PM"},
        {id: "23:30", text: "11:30 PM"},
        {id: "23:45", text: "11:45 PM"}
    ]

});
/**
 * Created by Chooli on 2015-05-07.
 */
App.SelectItineraryTypeComponent = App.Select2Component.extend({

    allowClear: false,

    minimumResultsForSearch: Infinity,

    content:[
        {id: "activity", text: SYSLang.Activity},
        {id: "destination", text: SYSLang.Destination},
        {id: "flight", text: SYSLang.Flight},
        {id: "car", text: SYSLang.Car},
        {id: "food", text: SYSLang.Food},
        {id: "hotel", text: SYSLang.Hotel}
    ],

    formatResult: function(item){
        return "<img src='images/admin/icon-itinerary-"+item.id+".png' height='23px' />&nbsp;"+item.text;
    },

    formatSelection: function(item){
        return "<img src='images/admin/icon-itinerary-"+item.id+".png' height='23px' />&nbsp;"+item.text;
    }

});
App.SendToMailerComponent = App.PopUpComponent.extend({
	
	elementId: 'send-to-mailer',

    availableFriends: null,

	friends: [],

	hasFriends: function(){
		return this.get('friends').length>0?true:false;
	}.property('friends'),

	mailMsg: "",

	mailer: {
        keyword: null,
		name: null,
		email: null
	},

    keywordChange: function(){
        var self = this, keyword = this.get("mailer").keyword;
        if(!keyword || keyword.length<1) return;
        //query friends
        App.DataAccess.getReq(App.API.FRIENDS.GET.LIST, {keyword:keyword})
            .then(function(data){
                //popup list
                if(data.success){
                    self.setProperties({
                        availableFriends: data.friends
                    });
                }
            });

    }.observes('mailer.keyword'),

	callback: null,

	actions: {

		addFriend: function(friend){
            if(friend && friend.email){
                this.get('mailer').name = friend.username;
                this.get('mailer').email = friend.email;
            }else{
                if(!App.ModuleManager.validateModel(this.get('mailer'), {
                        rules: {
                            keyword: "email"
                        }
                    })){
                    return;
                }else{
                    this.get('mailer').name = this.get('mailer').keyword;
                    this.get('mailer').email = this.get('mailer').keyword;
                }
            }


			var isExist = false, friends = this.get('friends')===null?[]:[].concat(this.get('friends')),
                newFriend = {
                    name: Ember.get(this.get('mailer'), 'name'),
                    email: Ember.get(this.get('mailer'), 'email')
                };

            //filter existing friends
            friends.filter(function(el, idx){
                if(el.name===newFriend.name && el.email===newFriend.email){
                    isExist = true;
                    return;
                }
            });

            if(!isExist){
                friends.push(newFriend);
            }

			Ember.set(this, "friends", friends);
			Ember.set(this.get("mailer"), "keyword", null);
            Ember.set(this.get("mailer"), "name", null);
            Ember.set(this.get("mailer"), "email", null);
		},

		removeFriend: function(friend){
			var friends = this.get('friends').filter(function(el, idx){
				return el != friend;
			});

			Ember.set(this, "friends", friends);
		},
		
		doYes: function () {
			//transfer receivers to string
			var recStr = "";

			this.get('friends').forEach(function(item){
                if(item.name===item.email){
                    recStr += item.email + ';';
                }else{
                    recStr += item.name + '<' + item.email + '>;';
                }
			});

			if(recStr.length>0)	this.get('callback').call(this, recStr, this.get('mailMsg'));
		},
		
		doNo: function () {
			this.set('isHidden', true);
		}
		
	}
	
	
});
App.SocialCommentsEditorComponent = Ember.Component.extend({

    elementId: 'socialcomments-editor-panel',

    currentUser: null,

    module: null,

    moduleRefId: null,

    moduleRefIdChange: function(){
        Ember.set(this.get('socialcomment'), 'moduleRefId', this.get('moduleRefId'));
    }.observes('moduleRefId'),

    socialcomment: {
        socialUserId: null,
        activated: true,
        content: null,
        module: null,
        moduleRefId: null
    },

    socialcomments: null,

    offlineCount: function(){
        var socialcomments = this.get('socialcomments');
        return socialcomments.filterBy('activated', false).get('length');
    }.property("socialcomments.@each.activated"),

    actions: {

        toggleActivate: function(socialcomment){
            var self = this;

            Ember.set(socialcomment, 'activated', socialcomment.activated?false:true);

            this.sendAction('checkinProgress');
            App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.SAVE, socialcomment)
                .then(function(data){
                    if(!data.success){
                        Ember.set(socialcomment, 'activated', socialcomment.activated?false:true);
                    }

                    self.sendAction('checkoutProgress');
                });
        },

        save: function(){
            var self = this, socialcomment = this.get('socialcomment');

            Ember.set(socialcomment, 'module', this.get('module'));
            Ember.set(socialcomment, 'socialUserId', this.get('currentUser'));

            if(!App.ModuleManager.validateModel(socialcomment, {
                    rules: {
                        content: "required",
                        moduleRefId: "required"
                    },
                    messages: {
                        content: "Please enter the content"
                    }
                })) return;

            this.sendAction('checkinProgress');
            App.DataAccess.postReq(App.API.SOCIALCOMMENTS.POST.SAVE, socialcomment)
                .then(function(data){
                    if(data.success){
                        Ember.set(self.get('socialcomment'), 'content', null);
                        var socialcomments = self.get('socialcomments').concat(data.socialcomment);
                        self.set('socialcomments', socialcomments);
                    }

                    self.sendAction('checkoutProgress');
                });
        },

        remove: function(socialcomment){
            var self = this;

            this.sendAction('confirm', function(){
                App.DataAccess.deleteReq(App.API.SOCIALCOMMENTS.DELETE.REMOVE, {uuid:socialcomment.uuid})
                    .then(function(data){
                        if(data.success){
                            var index, i=0;
                            for(i;i<self.socialcomments.length;i++){
                                if(self.socialcomments[i].uuid === socialcomment.uuid){
                                    index = i;
                                    break;
                                }
                            }
                            self.get('socialcomments').removeAt(index, 1);
                        }

                        self.sendAction('checkoutProgress');
                    });
            });
        }

    },

    willDestroyElement: function(){
        this.set('socialcomments', null);
    }

});
/**
 * Created by Chooli on 4/21/2015.
 */
App.TimePickerComponent = Ember.Component.extend({

    elementId: 'time-picker',

    time: null,

    interval: 200,

    hour: 1,

    hourText: function(){
        return this.get('hour')>9 ? this.get('hour') : "0"+this.get('hour');
    }.property('hour'),

    minute: 0,

    minuteText: function(){
        return this.get('minute')>9 ? this.get('minute') : "0"+this.get('minute');
    }.property('minute'),

    /** ampm text support AM/PM **/
    ampmText: "AM",

    inputType: "hidden",

    updateTime: function(){
        var hour = this.get('hour'),
            minute = this.get('minute'),
            ampm = this.get('ampmText');

        var timeStr = hour + ":" + minute + " " + ampm,
            time = moment(timeStr, "hh:mm A");

        this.set("time", time.format("HH:mm"));

    },

    increaseHour: function(){
        var hour = this.get("hour");
        if(hour<12){
            hour++;
        }else{
            hour = 1;
        }
        this.set("hour", hour);
        this.updateTime();
    },

    decreaseHour: function(){
        var hour = this.get("hour");
        if(hour>1){
            hour--;
        }else{
            hour = 12;
        }
        this.set("hour", hour);
        this.updateTime();
    },

    increaseMinute: function(){
        var minute = this.get("minute");

        if(minute<59){
            minute++;
        }
        else{
            minute = 0;
        }

        this.set("minute", minute);
        this.updateTime();
    },

    decreaseMinute: function(){
        var minute = this.get("minute");

        if(minute>0){
            minute--;
        }else{
            minute = 59;
        }

        this.set("minute", minute);
        this.updateTime();
    },

    didInsertElement: function() {
        var time = !this.get("time") ? moment("06:00", "HH:mm") : moment(this.get("time"), "HH:mm");
        this.set("hour", time.format("h"));
        this.set("minute", time.format("m"));
        this.set("ampmText", time.format('A'));
    },

    longPress: null,

    longPressTarget: null,

    longPressInterval: null,

    mouseUp: function (e) {
        var target = this.get('longPressTarget');
        Ember.run.cancel(this.get('longPress'));
        switch(target){
            case "LH":
                this.increaseHour();
                break;
            case "SH":
                this.decreaseHour();
                break;
            case "LM":
                this.increaseMinute();
                break;
            case "SM":
                this.decreaseMinute();
                break;
        }

        clearInterval(this.get('longPressInterval'));
        this.set("longPressTarget", null);
    },

    actions: {

        longHour: function(){
            var self = this, runLater = Ember.run.later(this, function(){
                var interval = setInterval(function(){
                    self.increaseHour();
                }, self.get('interval'));
                self.set('longPressInterval', interval);
            }, self.get('interval'));
            this.set('longPress', runLater);
            this.set('longPressTarget', 'LH');
        },

        shortHour: function(){
            var self = this, runLater = Ember.run.later(this, function(){
                var interval = setInterval(function(){
                    self.decreaseHour();
                }, self.get('interval'));
                self.set('longPressInterval', interval);
            }, self.get('interval'));
            this.set('longPress', runLater);
            this.set('longPressTarget', 'SH');
        },

        longMinute: function(){
            var self = this, runLater = Ember.run.later(this, function(){
                var interval = setInterval(function(){
                    self.increaseMinute();
                }, self.get('interval'));
                self.set('longPressInterval', interval);
            }, self.get('interval'));
            this.set('longPress', runLater);
            this.set('longPressTarget', 'LM');
        },

        shortMinute: function(){
            var self = this, runLater = Ember.run.later(this, function(){
                var interval = setInterval(function(){
                    self.decreaseMinute();
                }, self.get('interval'));
                self.set('longPressInterval', interval);
            }, self.get('interval'));
            this.set('longPress', runLater);
            this.set('longPressTarget', 'SM');
        },

        togglrAMPM: function(){
            var ampm = this.get('ampmText');
            if(ampm === "AM") this.set("ampmText", "PM");
            else this.set("ampmText", "AM");

            this.updateTime();
        }


    }

});
App.TopWaitingDrawerComponent = Ember.Component.extend({
			
	elementId: 'top_waiting_drawer',
		
	isWaiting: null,
	
	isWaitingChange: function(){
		if(this.get('isWaiting')) this.wait();
		else this.finish();
	}.observes('isWaiting'),
	
	wait: function() {			
		Ember.$('#'+this.get('elementId')).animate({
		   top: '44px'
		}, 300);			
	},
	
	finish: function() {
		Ember.run.later(this, function(){
			Ember.$('#'+this.get('elementId')).animate({
			   top: '-50px'
			}, 300);
		}, 1000);
	}
	
});
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
/**
 * Created by Chooli on 1/30/2015.
 */
App.RadioButton = Ember.View.extend({

    tagName : "input",

    type : "radio",

    attributeBindings : [ "name", "type", "value", "checked:checked:" ],

    click : function() {
        this.set("selection", this.$().val())
    },

    checked : function() {
        return this.get("value") == this.get("selection");
    }.property()

});
