var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var BookModel = require('./model');

module.exports = Backbone.View.extend({
  className: 'addBook',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'onAddBook'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new BookModel();
    }
  },
  onAddBook: function (evt) {
    evt.preventDefault();
    var newBook = {
      title: this.$el.find('input[name="title"]').val(),
      author: this.$el.find('input[name="author"]').val(),
      cover: this.$el.find('input[name="coverPhoto"]').val(),
      description: this.$el.find('textarea[name="description"]').val()
    };
    this.model.set(newBook);
    this.model.save();
    this.$el.find('input, textarea').val('');

  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
