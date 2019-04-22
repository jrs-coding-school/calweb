var $ = require('jquery');
var ItemCollection = require('./collection');
window.ItemModel = require('./model');

$(function () {
  // dom is ready

  window.itemCollection = new ItemCollection(myData);

});
