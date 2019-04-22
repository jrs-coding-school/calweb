var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bookTracker',
  idAttribute: '_id',
  defaults: function () {
    // do stuff
    return {
      title: "Catcher in the Rye",
      author: "JD Salinger",
      cover: "https://www.homework-online.com/assets/the-catcher-in-the-rye-cover-6c8dab7d64192277315d6bf528d6f7b2.jpg",
      description: "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation"
    };
  },
  initialize: function () {

  }

});
