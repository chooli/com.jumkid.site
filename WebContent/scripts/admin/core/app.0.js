App = Ember.Application.create({
    //disable write out transition events to the log
    LOG_TRANSITIONS: false,
    
    SYSLang: SYSLang,
    
    currentPath: 'index',

    PROFILE: {

        appName: 'SiteStory',

        copyright: '2015 copyright by Jumkid Innovation',

        version: 0.3,

        menuItems: null

    },

    FIXTURE: {

        language: [
            {name: "English", value: "en"},
            {name: "中文", value: "zh_cn"}
        ],

        currency: [
            {name: "$", value: "$"},
            {name: "¥", value: "¥"},
            {name: "€", value: "€"},
            {name: "£", value: "£"}

        ],

        albumStyles: [
            {name: SYSLang.Gallery, value: "gallery"},
            {name: SYSLang.CD, value: "cd"},
            {name: SYSLang.Vedio, value: "video"}
        ],

        flyerStyles: [
            {name: SYSLang.Gallery, value: "gallery"},
            {name: SYSLang.Slide, value: "slider"}
        ]

    },

    FN: {

        isEmpty: function(str){
            return (!str || /^\s*$/.test(str));
        }

    }
    	
});

DS.ArrayTransform = DS.Transform.extend({
    serialize: function(serialized) {
        alert(Ember.typeOf(serialized));
        return serialized;
    },

    deserialize: function(deserialized) {
        alert(Ember.typeOf(deserialized));
        return deserialized;
    }
});

App.register('transform:array', DS.ArrayTransform);
