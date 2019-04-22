var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'photo',
  template: _.template($('#photoTmpl').html()),
  events: {
    'click span': 'onArticleClick',
  
  },
  editPhoto: function () {},
  onArticleClick: function () {
    alert('you heart it!');
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    console.log(markup);
    this.$el.html(markup);
    return this;
  },
  initialize: function () {
    console.log(this.render().el);
  }

});
