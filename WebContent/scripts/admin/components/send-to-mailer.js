App.SendToMailerComponent = App.PopUpComponent.extend({
	
	elementId: 'send-to-mailer',

    availableFriends: null,

	friends: [],

	hasFriends: function(){
		return this.get('friends').length>0?true:false;
	}.property('friends'),

	mailMsg: "",

	mailer: {
        keyword: null,
		name: null,
		email: null
	},

    keywordChange: function(){
        var self = this, keyword = this.get("mailer").keyword;
        if(!keyword || keyword.length<1) return;
        //query friends
        App.DataAccess.getReq(App.API.FRIENDS.GET.LIST, {keyword:keyword})
            .then(function(data){
                //popup list
                if(data.success){
                    self.setProperties({
                        availableFriends: data.friends
                    });
                }
            });

    }.observes('mailer.keyword'),

	callback: null,

	actions: {

		addFriend: function(friend){
            if(friend && friend.email){
                this.get('mailer').name = friend.username;
                this.get('mailer').email = friend.email;
            }else{
                if(!App.ModuleManager.validateModel(this.get('mailer'), {
                        rules: {
                            keyword: "email"
                        }
                    })){
                    return;
                }else{
                    this.get('mailer').name = this.get('mailer').keyword;
                    this.get('mailer').email = this.get('mailer').keyword;
                }
            }


			var isExist = false, friends = this.get('friends')===null?[]:[].concat(this.get('friends')),
                newFriend = {
                    name: Ember.get(this.get('mailer'), 'name'),
                    email: Ember.get(this.get('mailer'), 'email')
                };

            //filter existing friends
            friends.filter(function(el, idx){
                if(el.name===newFriend.name && el.email===newFriend.email){
                    isExist = true;
                    return;
                }
            });

            if(!isExist){
                friends.push(newFriend);
            }

			Ember.set(this, "friends", friends);
			Ember.set(this.get("mailer"), "keyword", null);
            Ember.set(this.get("mailer"), "name", null);
            Ember.set(this.get("mailer"), "email", null);
		},

		removeFriend: function(friend){
			var friends = this.get('friends').filter(function(el, idx){
				return el != friend;
			});

			Ember.set(this, "friends", friends);
		},
		
		doYes: function () {
			//transfer receivers to string
			var recStr = "";

			this.get('friends').forEach(function(item){
                if(item.name===item.email){
                    recStr += item.email + ';';
                }else{
                    recStr += item.name + '<' + item.email + '>;';
                }
			});

			if(recStr.length>0)	this.get('callback').call(this, recStr, this.get('mailMsg'));
		},
		
		doNo: function () {
			this.set('isHidden', true);
		}
		
	}
	
	
});