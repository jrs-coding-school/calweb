var Backbone = require('backbone');
var Book = require('./model');
var _ = require('underscore');
var tmpl = require('./templates');
module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'book',
  events: {
    'click .delete': 'deleteItem'
  },
  template: _.template(tmpl.book),
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  deleteItem: function () {
    this.model.destroy();
    this.$el.remove();
  }
});
