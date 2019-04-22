var $ = require('jquery');
var FlickrCollection = require('./flickrCollection');
var PhotoCollectionView = require('./flickrCollectionView');

$(function () {
  var photos = new FlickrCollection();

  photos.fetch().then(function (data) {
    console.log("these are the photos: ", photos);
    new PhotoCollectionView({collection: photos});

  });
})
