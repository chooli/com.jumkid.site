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
