(function () {
  "use strict";
  angular
    .module('myAzon', [
      'ngRoute',
      'myAzon.products',
      'myAzon.cart'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main.html',
          // controller: 'MainController'
        })
        .when('/404', {
          template: '<h1>Sorry page not found</h1>'
        })
        .otherwise({ redirectTo: '/404'})
    });



})();
