var Backbone = require('backbone');
var BookView = require('./modelView');
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');

module.exports = Backbone.View.extend({
  el: '#layout',
  initialize: function () {
    this.$el.find('header').html(new HeaderView().render().el);
    this.$el.find('footer').html(new FooterView().render().el);
  },
  renderSubview: function (view) {
    if(this.view) {
      this.view.remove();
    }
    this.view = view;
    
    this.$el.find('.content').html(this.view.render().el);

  }
});
