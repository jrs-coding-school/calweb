var $ = require('jquery');
var Router = require('./router');
var Backbone = require('backbone');
var LayoutView = require('./layoutView');


$(function () {

  new Router({layout: new LayoutView()});
  Backbone.history.start();
});
