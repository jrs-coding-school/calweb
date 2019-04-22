(function () {
  "use strict";

  angular
    .module('bloggy', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'list.html',
          controller: 'BlogController'
        })
        .when('/addPost', {
          templateUrl: 'create.html',
          controller: 'BlogController'
        })
        .when('/post/:blogId', {
          templateUrl: 'show.html',
          controller: 'BlogController'
        })
        .when('/post/:blogId/edit', {
          templateUrl: 'edit.html',
          controller: 'BlogController'
        })
    })
})();
