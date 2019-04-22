(function () {
  'use strict';

  angular
    .module('littlechatdawg')
    .controller('ChatController', function ($scope, RocketPowerService) {

      $scope.messages = []


      $scope.socketToMe = function(newMessage) {
        RocketPowerService.emit('new:chat',newMessage)
        $scope.newMessage = "";
      }

      RocketPowerService.on('new:chat', function(data) {
        var message =  {
          text: data
        }
        $scope.messages.push(message);
      })

      RocketPowerService.on('all:messages',function(data) {
        $scope.messages = data;
      })



    })

})();
