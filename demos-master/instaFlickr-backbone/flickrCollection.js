var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Collection.extend({
  url: function () {
    return this.config().buildUrl();
  },
  config: function () {
    return {
          baseUrl: 'https://api.flickr.com/services/rest/?',
          apiKey: '79fb5d98470867ae3cd196873299538d',
          method: 'flickr.interestingness.getList',
          format: 'json',
          buildUrl: function () {
            return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
          }
        };
  },
  buildImgUrl: function (obj) {
          return 'https://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '_z.jpg';
  },
  parse: function (data) {
    var self = this;
    return _.map(data.photos.photo, function (obj) {
      return {image: self.buildImgUrl(obj), title: obj.title, dtUpload: obj.dateupload};
    })
  },
  initialize: function () {
    console.log(this.url());
  }
});
