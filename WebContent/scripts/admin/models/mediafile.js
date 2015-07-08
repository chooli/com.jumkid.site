App.MediaFile = DS.Model.extend({
    uuid: DS.attr('string'),
    filename: DS.attr('string'),
    title: DS.attr('string'),
    mimeType: DS.attr('string'),
    site: DS.attr('string'),
    module: DS.attr('string'),
    moduleRefId: DS.attr('number'),
    labels: DS.attr('array'),
    passcode: DS.attr('string'),
    createdDate: DS.attr('date', {
        defaultValue: function() { return new Date(); }
    }),
    content: DS.attr('string'),
    logicalPath: DS.attr('string')

});