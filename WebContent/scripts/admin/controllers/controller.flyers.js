/**
 * Created by Chooli on 1/13/2015.
 */
App.FlyersController = App.PageableAbstractController.extend({

    needs: ["flyer"],

    flyers: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.FLYER.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'flyers': data.flyers,
                        'currentPage': data.currentPage,
                        'nextPage': data.nextPage,
                        'previousPage': data.previousPage,
                        'totalPages': data.totalPages !== null ? data.totalPages : 0
                    });

                    App.checkout(self);
                });
        },

        newEntity: function () {
            var self = this;
            this.transitionToRoute('/flyer').then(function(){
                self.get('controllers.flyer').send('newEntity');
            });
        },

        editEntity: function (entity) {
            var self = this;
            this.transitionToRoute('/flyer').then(function(){
                self.get('controllers.flyer').set('model', null);
                self.get('controllers.flyer').send('editEntity', entity.uuid);
            });
        }

    }

});
