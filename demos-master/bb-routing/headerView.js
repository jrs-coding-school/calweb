var Backbone = require('backbone');
var Book = require('./model');
var _ = require('underscore');
var tmpl = require('./templates');
module.exports = Backbone.View.extend({
  className: 'header',
  template: _.template(tmpl.header),
  initialize: function () {},
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
