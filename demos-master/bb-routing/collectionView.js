var Backbone = require('backbone');
var BookView = require('./modelView');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  tagName: 'section',
  initialize: function () {},
  render: function () {
    this.addAll();
    console.log(this);
    return this;
  },
  addAll: function () {
    console.log(this.collection.models);
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (bookModel) {
    var bookView = new BookView({model: bookModel});
    this.$el.append(bookView.render().el);
  }
});
