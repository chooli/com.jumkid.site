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