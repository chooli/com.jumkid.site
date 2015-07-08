Ember.Handlebars.helper('index-number', function(index) {
	return index+1;
});

Ember.Handlebars.helper('trimLength', function(str, length) {
	if (!str) return "";
	if (!length) length = 36;
	if (str.length > length) return str.substring(0, length)+"...";
	return str;
});

Ember.Handlebars.helper('module-icon', function(module, size) {
	if(!module) return "";

	var html = "<img src='images/admin/icon-"+module+".png' height='"+(!size?23:size)+"' />";
	return new Ember.Handlebars.SafeString(html);
});

Ember.Handlebars.helper('thumbnail-img', function(mediafile) {
	var url = App.DataAccess.assembleUrl(App.API.SHARE.GET.THUMBNAIL, {uuid:mediafile.uuid}),
		html = "<img src='"+url+"' height='64' draggable='true' />";

	return new Ember.Handlebars.SafeString(html);
});

Ember.Handlebars.helper('featured-img', function(uuid, size) {
	if(!uuid) return "";
	var url = App.DataAccess.assembleUrl(App.API.FILE.GET.THUMBNAIL, {uuid:uuid}),
		html = "<img src='"+url+"' width='"+(size===null?197:size)+"' />";

	return new Ember.Handlebars.SafeString(html);
});

Ember.Handlebars.helper('user-avatar', function(username, size){
	var url = App.DataAccess.assembleUrl(App.API.USER.GET.AVATAR, {username:username}),
	    html = "<div class='avatar' style='background: url("+url+") no-repeat;background-size: "+(size===null?36:size)+"px "+
            (size===null?36:size)+"px;height:"+(size===null?36:size)+"px;width:"+(size===null?36:size)+"px;'>&nbsp;</div>";

	return new Ember.Handlebars.SafeString(html);
});

Ember.Handlebars.helper('metadata-form', function(mediafile) {
	
	if(!mediafile) return null;
		
	var str = "", metadata = mediafile._metadata, pro = null;
	for(pro in metadata){
		str += "<div class='metadata_form_field'> <label>" + pro + "</label> {{input type='text' }}" + metadata[pro]+"</div>";
	}
	
	return new Ember.Handlebars.SafeString(str);
});

Ember.Handlebars.registerBoundHelper('datalog-action', function(action) {
	var str;
	switch(action) {
		case "CREATE":
			str = SYSLang.Create;
			break;
		case "DELETE":
			str = SYSLang.Delete;
			break;
		default:
			str = SYSLang.Update;
	}

	return new Ember.Handlebars.SafeString(str);

});

Ember.Handlebars.helper('itinerary-attribute-icon', function(attributeType, size) {
	if(!attributeType) return "";

	var html = "<img src='images/admin/icon-itinerary-"+attributeType+".png' height='"+(!size?23:size)+"' />";
	return new Ember.Handlebars.SafeString(html);
});

Ember.Handlebars.helper('itinerary-attribute-time', function(attributeTime) {
	if(!attributeTime) return "";

	var html = "<span class='s-itienrary-attribute-time'>"+moment(attributeTime, "hh:mm").format("hh:mm A")+"</span>";
	return new Ember.Handlebars.SafeString(html);
});