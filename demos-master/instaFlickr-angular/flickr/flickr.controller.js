(function () {
  "use strict";
angular
  .module('flickr')
  .controller('FlickrController', function ($scope, FlickrService, LikeService, $routeParams) {
    var vm = this; // vm === viewModel;
    vm.alertMe = function () {
      alert('yes, it works!');
    };
    vm.testData = "this is in flickrController";

    FlickrService.getFlickrData().then(function (photos) {
      vm.photos = photos;
      console.log(vm);
    });
    $scope.$on('like:added', function () {
      FlickrService.getFlickrData().then(function (photos) {
        vm.photos = photos;
        console.log(vm);
      });
      console.log('a like was added!!!!');
    });

    console.log('photo id: ', $routeParams.flickrId);
    // if($routeParams.flickrId) {
    // LikeService.getSinglePhoto($routeParams.flickrId).success(function (likedPhoto) {
    //   $scope.likedPhoto = likedPhoto;
    //   console.log('likedPhoto: ',$scope.likedPhoto);
    // });
  // }

  })
  .controller('dummyController', function ($scope) {
    var vm = this;
      vm.testData = "this is in dummyController";
  })

})();
