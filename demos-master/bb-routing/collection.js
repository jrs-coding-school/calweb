var Backbone = require('backbone');
var Book = require('./model');
module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bb-routes',
  model: Book
});
