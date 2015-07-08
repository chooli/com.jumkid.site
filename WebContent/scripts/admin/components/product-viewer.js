/**
 * Created by Chooli on 1/13/2015.
 */
App.ProductViewerComponent = App.MediaViewerComponent.extend({

    elementId: 'product_viewer_panel',

    didInsertElement: function(){
        // Set up the number formatting.
        Ember.$('input[name=regularPrice]').number( true, 2 );
        Ember.$('input[name=salePrice]').number( true, 2 );
        Ember.$('input[name=discountRate]').number( true, 0 );
    }

});