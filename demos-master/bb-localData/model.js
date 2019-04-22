var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    task: "This is a default task",
    isComplete: false
  },
  initialize: function () {
    console.log("model was created");
  }
})
