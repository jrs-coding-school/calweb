(function () {
  "use strict";

  angular
    .module('bloggy')
    .factory('BlogService', function ($http) {
      var url = "http://tiny-tiny.herokuapp.com/collections/blogDemo";
      var addPost = function (newPost) {
        console.log(newPost);
        $http.post(url, newPost);
      };

      var getPosts = function () {
        return $http.get(url);
      };

      var getSinglePost = function (postId) {
        return $http.get(url + '/' + postId);
      };

      var updatePost = function (updatedPost) {
        return $http.put(url + '/' + updatedPost._id, updatedPost);
      };
      var removePost = function (postId) {
        return $http.delete(url + '/' + postId);
      };



      return {
        addPost: addPost,
        getSinglePost: getSinglePost,
        removePost: removePost,
        updatePost: updatePost,
        getPosts: getPosts
      }
    })

})();
