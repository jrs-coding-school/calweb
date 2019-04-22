(function () {
  "use strict";
  angular
    .module('stateIntro', [
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home/about');
      $stateProvider
        .state('home', {
          url: '/home',
          abstract: true,
          templateUrl: 'main.html'

        })
        .state('home.about', {
          url: '/about',
          views: {
              'home-about': {
                templateUrl: 'about.html'
              },
              'home-contact': {
                templateUrl: 'contact.html',
                controller: function ($scope, $state) {
                  $scope.logMe = function () {
                    console.log('hello from contact');
                    $state.go('home.contact');
                  }
                }
              }

          }

        })
        .state('home.contact', {
          url: '/changed',
          views: {
            'home-about': {
              templateUrl: 'about.html'
            },
            'home-contact': {
              templateUrl: 'main-list.html',
              controller: function ($scope, $state) {
                $scope.logMe = function () {
                  console.log('hello from contact');
                  $state.go('home.about');
                }
              }
            }
          }

        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
    })

})();
