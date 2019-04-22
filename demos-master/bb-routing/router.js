var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var FormView = require('./formView');
var Collection = require('./collection');
var CollectionView = require('./collectionView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'home': 'homePage',
    'about': 'aboutPage',
    'addBook': 'addBook'

  },
  initialize: function (options) {
    if(!this.layout) {
      this.layout = options.layout;
    }
  },
  homePage: function () {
    console.log("you've made it to home!!");
    var self = this;
    var collection = new Collection();

    collection.fetch().then(function () {
      console.log(collection);
      self.layout.renderSubview(new CollectionView({collection: collection}));
    })
  },
  aboutPage: function () {
    console.log("you've made it to the about page");
  },
  addBook: function () {
    // render form view pass router instance so can navigate
    this.layout.renderSubview(new FormView());
  }




})
