var Backbone = require('backbone');
var ItemModel = require('./model');

module.exports = Backbone.Collection.extend({
  model: ItemModel
});
