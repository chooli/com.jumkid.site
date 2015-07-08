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