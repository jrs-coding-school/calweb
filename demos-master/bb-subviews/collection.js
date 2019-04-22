var Backbone = require('backbone');
var BookModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bookTracker',
  model: BookModel,
  initialize: function () {

  }

});
