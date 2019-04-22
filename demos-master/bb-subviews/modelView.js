var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  model: null, // just here as placeholder, but need a model up on instantiation
  initialize: function () {},
  template: _.template(tmpl.book),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
