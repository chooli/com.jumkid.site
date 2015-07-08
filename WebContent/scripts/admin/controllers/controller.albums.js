App.AlbumsController = App.PageableAbstractController.extend({

    needs: ['album'],

    albums: null,

    actions: {

        search: function (start) {
            var self = this;

            App.checkin(self);

            App.DataAccess.getReq(App.API.ALBUM.GET.SEARCH, {keyword:this.get('keyword'), start:start})
                .then(function(data) {

                    self.setProperties({
                        'albums': data.albums,
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
            this.transitionToRoute('/album').then(function(){
                self.get('controllers.album').send('newEntity');
            });
        },

        editEntity: function (album) {
            var self = this;
            this.transitionToRoute('/album').then(function(){
                self.get('controllers.album').set('model', null);
                self.get('controllers.album').send('editEntity', album.uuid);
            });
        }

    }

});
