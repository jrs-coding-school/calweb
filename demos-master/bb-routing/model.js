var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bb-routes',
  idAttribute: '_id',
  initialize: function () {}
});
