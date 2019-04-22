var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var BookView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '.content',
  collection: null, // just here as placeholder, but need a collection upon instantiation
  initialize: function () {
    // console.log(this.collection);
    this.addAll();
  },
  addOne: function (bookModel) {
    console.log("book model", bookModel);
    var bookView = new BookView({model: bookModel});
    this.$el.append(bookView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
