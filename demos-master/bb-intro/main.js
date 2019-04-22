var $ = require('jquery');
var ItemCollection = require('./itemCollection');
var ItemModel = require('./itemModel');


$(document).ready(function () {

  window.itemCollection = new ItemCollection();
  console.log("before fetch: ", itemCollection);
  var myModel = new ItemModel({task: "this is a cool task"});
  myModel.save();
  itemCollection.fetch().then(function (collectionData) {
    console.log(itemCollection);

  });



});
