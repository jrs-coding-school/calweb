(function () {
  "use strict";

  angular
    .module('bloggy')
    .controller('BlogController', function ($scope, $routeParams, BlogService) {
      BlogService.getPosts().success(function (posts) {
        $scope.posts = posts;
      });

      if($routeParams.blogId) {
        BlogService.getSinglePost($routeParams.blogId).success(function (singlePost) {
          console.log(singlePost);
          $scope.singlePost = singlePost;
        });
      }

      $scope.newPost = function (post) {
        BlogService.addPost(post);
      };

      $scope.editPost = function (editedPost) {
        BlogService.updatePost(editedPost);
      };
      $scope.deletePost = function (postId) {
        BlogService.removePost(postId);
      };

    });

})();
