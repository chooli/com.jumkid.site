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