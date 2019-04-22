(function () {
  "use strict";
  angular
    .module('mahBooks', [
      'ngRoute',
      'mahBooks.books'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>hello!</h1>'
        })
        .when('/404', {
          template: '<h1>Sorry, page not found</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });
})();
