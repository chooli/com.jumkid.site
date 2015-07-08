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