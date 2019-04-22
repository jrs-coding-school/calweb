// Item Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bbmodel',
  idAttribute: '_id',
  defaults: {
    task: "Generic Task",
    isComplete: false
  },
  initialize: function () {
      // NOOP
      console.log('created new model');
  }
});
