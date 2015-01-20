var StoreListCollection = Backbone.Collection.extend({
  model: Item,
  url: '/items'
});

var OurListCollection = Backbone.Collection.extend({
  model: Item
});

