angular
  .module('geocode', [
    'ngRoute',
    'angular-mapbox'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainController'
      })
      .when('/addSpot', {
        templateUrl: 'addSpot.html',
        controller: 'MainController'
      })
  })
