var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var PhotoView = require('./flickrModelView');

module.exports = Backbone.View.extend({
  el: '#photos',
  events: {
    'click .showForm': 'doSomething',
    // 'submit form': 'submitForm'
  },
  submitForm: function () {
    var newPhoto = {
      title: this.$el.find('form').find('input[type="title"]').val(),
      
    };
    var newModel = new PhotoModel(newPhoto);
    newModel.save();
    this.collection.add(newModel);
    this.addOne(newModel);
  },
  doSomething: function () {
    alert('you clicked the button');
  },
  initialize: function () {
    this.addAll();
  },
  addOne: function (photoModel) {
    var photoView = new PhotoView({model: photoModel});
    this.$el.append(photoView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);

  }
})
