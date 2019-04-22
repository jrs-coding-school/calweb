var Backbone = require('backbone');
var Book = require('./model');
var _ = require('underscore');
var tmpl = require('./templates');
module.exports = Backbone.View.extend({
  tagName: 'form',
  className: 'newBook',
  template: _.template(tmpl.form),
  initialize: function () {
    if(!this.model) this.model = new Book();
  },
  events: {
    'submit': 'addBook'
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    console.log(this.el);
    return this;
  },
  addBook: function (e) {
    e.preventDefault();
    var $form = this.$el;
    var newBook = {
      title: $form.find('input[name="title"]').val(),
      cover: $form.find('input[name="cover"]').val(),
      author: $form.find('input[name="author"]').val(),
      description: $form.find('input[name="description"]').val()
    };
    console.log("new book", newBook);
    this.model.save(newBook);
    window.location.hash = '#';
  }
});
