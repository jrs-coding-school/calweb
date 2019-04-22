
(function () {
  "use strict";

  angular
    .module('flickr', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/flickr', {
          templateUrl: 'flickr/views/list.html',
          controller: 'FlickrController as flickrCtrl',
          // controllerAs: 'flickrCtrl'
        })
        .when('/flickr/:flickrId', {
          templateUrl: 'flickr/views/detail.html',
          controller: 'FlickrController as flickrCtrl',
          // controllerAs: 'flickrCtrl'
        })
        .otherwise({ redirectTo: '/404'});
    });


})();
