App.Blog = App.MediaFile.extend({
	author: DS.attr('string'),
	summary: DS.attr('string'),
	htmlContent: DS.attr('string')
});