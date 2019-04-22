angular
  .module('geocode')
  .controller('MainController', function ($scope, MainService, mapboxService) {
     mapboxService.init({ accessToken: 'pk.eyJ1IjoiY2Fsd2ViIiwiYSI6IkQxUTJBS2cifQ.aS0kLu4cddiieYU2XoFGvg' });
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
     MainService.getSpots().success(function (spots) {
       $scope.spots = spots;



     });
     $scope.addSpot = function (spot) {
       MainService.createSpot(spot);
     };
  });
