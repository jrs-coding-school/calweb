(function () {
  "use strict";
  angular
  .module('likes')
  .controller('LikesController', function ($scope, LikeService, $routeParams) {
    var vm = this;
    vm.likePhoto = function (photo) {
      photo.likes === undefined ? photo.likes = 1 : photo.likes++;
      console.log(photo.likes);
      LikeService.addLikedPhoto(photo);
    };

    LikeService.getLikes().success(function (likedPhotos) {
      vm.likedPhotos = likedPhotos;
    });
    vm.deleteLike = function (photoId) {
      LikeService.deletePhoto(photoId);
    }
console.log($routeParams.likeId);
    if($routeParams.likeId) {
    LikeService.getSinglePhoto($routeParams.likeId).success(function (likedPhoto) {
      vm.likedPhoto = likedPhoto;
      console.log('likedPhoto: ',likedPhoto);
    });
  }

    $scope.$on('like:deleted', function () {
      console.log('a like was deleted!!!');
      LikeService.getLikes().success(function (likedPhotos) {
        vm.likedPhotos = likedPhotos;
      });
    });

  });
})();
