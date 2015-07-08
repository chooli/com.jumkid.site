/**
 * Created by Chooli on 1/13/2015.
 */
App.PageableAbstractController = Ember.Controller.extend({

    needs: ['application'],

    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    keyword: '',

    hasNoPreviouse: function () {
        return (this.get('previousPage') === null) ? true : false;
    }.property('previousPage'),

    hasNoNext: function () {
        return (this.get('nextPage') === null) ? true : false;
    }.property('nextPage'),

    currentPage: 0,

    totalPages: 0,

    totalRecords: 0,

    nextPage: null,

    previousPage: null,

    facetFields: null,

    facetPrefix: '',

    pagingInfo: function(){
        if (this.get('totalPages') === 0) return null;
        return (this.get('currentPage') + 1) + '/' + this.get('totalPages');
    }.property('totalPages', 'currentPage'),

    actions: {

        typeSearch: function () {
            this.send('search');
        },

        nextPage: function () {
            this.send('search', this.get('nextPage'));
        },

        previousPage: function () {
            this.send('search', this.get('previousPage'));
        },

        search: null

    }

});
