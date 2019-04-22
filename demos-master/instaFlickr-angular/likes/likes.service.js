(function () {
  "use strict";
  angular
  .module('likes')
  .factory('LikeService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/ng-instaflickr';

    var getLikedPhotos = function () {
      return $http.get(url);
    };

    var addLikedPhoto = function (photo) {
      $http.post(url, photo).success(function (res) {
        console.log(res);
        $rootScope.$broadcast('like:added');
      });
    };

    var getSinglePhoto = function (photoId) {
      return $http.get(url + '/' + photoId);
    };

    var deleteLikedPhoto = function (photoId) {
      $http.delete(url + '/' + photoId).then(function (res) {
        console.log(res);
          $rootScope.$broadcast('like:deleted');
      });
    };

    var updateLikedPhoto = function (photo) {
      $http.put(url + '/' + photo._id, photo).then(function (res) {
        console.log(res);
      });
    };

    return {
      getLikes: getLikedPhotos,
      getSinglePhoto: getSinglePhoto,
      deletePhoto: deleteLikedPhoto,
      updateLikedPhoto: updateLikedPhoto,
      addLikedPhoto: addLikedPhoto
    };





  })
})();
