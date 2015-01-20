var Item = Backbone.Model.extend({

  defaults: {
    'name': 'nothing',
    'free': '0.00'
  },

  initialize: function() {
    console.log('create model');
  }

});
