var ItemView = Backbone.View.extend({
  tagName: 'tr',

  className: 'item',

  events: {
    // "submit #new-user-form": "createUser",
    // "click #get-user": "getUser"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);

  },

  template: _.template($('#itemRow').html()),

  render: function() {
    console.log('render');

    this.$el.html(this.template({ item: this.model.attributes }));
    this.$el.draggable({
      helper: "clone"
    });
    return this;
  },

});

var StoreListView = Backbone.View.extend({

  events: {
    // "submit #new-user-form": "createUser",
    // "click #get-user": "getUser"
  },

  initialize: function() {
    this.listenTo(this.collection, "change", this.render);
  },

  template: _.template($('#store-list').html()),

  render: function() {
    console.log('render Store List');


    this.$el.html(this.template());
    var that = this;

    this.collection.each(function(item){
      var itemView = new ItemView({
        model: item
      });

      that.$el.find('tbody').append(itemView.render().$el);
    });

    return this;
  },

});

var OurListView = Backbone.View.extend({

  events: {
    // "submit #new-user-form": "createUser",
    // "click #get-user": "getUser"
  },

  initialize: function() {
    this.listenTo(this.collection, "add", this.render);
    this.total = 0;
  },

  template: _.template($('#checkout').html()),

  addItemToList: function (event, ui){
    var item = {name: ui.draggable.children(".item_name").text(), price: parseFloat(ui.draggable.children(".item_price").text())}
    console.log(item)
    this.collection.add(item);
    this.total += item.price;
    $('#total_cost').text(this.total);
  },

  render: function() {
    console.log('render Our List');

    this.$el.html(this.template());
    var that = this;
    this.$el.find("table").droppable({
      accept: ".item",
      drop: this.addItemToList.bind(this)
   });

    this.collection.each(function(item){
      var itemView = new ItemView({
        model: item
      });

      that.$el.find('tbody').append(itemView.render().$el);
    });

    return this;

  }

});

