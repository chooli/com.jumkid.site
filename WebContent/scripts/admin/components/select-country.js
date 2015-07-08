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