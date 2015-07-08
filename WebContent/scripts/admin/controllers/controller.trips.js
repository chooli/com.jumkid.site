/**
 * Created by Chooli on 1/13/2015.
 */
App.TripsController = App.PageableAbstractController.extend({

    needs: ["trip"],

    trips: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.TRIP.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'trips': data.trips,
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
            this.transitionToRoute('/trip').then(function(){
                self.get('controllers.trip').send('newEntity');
            });
        },

        editEntity: function (entity) {
            var self = this;
            this.transitionToRoute('/trip').then(function(){
                self.get('controllers.trip').set('model', null);
                self.get('controllers.trip').send('editEntity', entity.uuid);
            });
        }

    }

});
