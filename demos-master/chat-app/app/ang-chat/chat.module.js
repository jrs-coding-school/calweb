(function () {
  'use strict';

  angular
    .module('littlechatdawg',[
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/',{
          controller: 'ChatController',
          templateUrl: 'ang-chat/views/chat.html'
        })
        .otherwise({
          redirectTo: '/'
        })
    });

})();
