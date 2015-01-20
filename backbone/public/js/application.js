var Router = Backbone.Router.extend({

  routes: {
    "": "navigateToHome"
  },

  navigateToHome: function() {
    var storeListCollection = new StoreListCollection();
    var ourListCollection = new OurListCollection();

      var storeListView = new StoreListView({
        collection: storeListCollection
      });

      var ourListView = new OurListView({
        collection: ourListCollection
      });

      storeListView.collection.fetch().done(function(){
        $('#storelist-container').html(storeListView.render().$el);
      });


      $('#ourlist-container').html(ourListView.render().$el);

  }

});

var router = new Router();

Backbone.history.start();






