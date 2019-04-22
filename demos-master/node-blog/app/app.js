(function () {
  'use strict'

  angular.module('nodeblog', ['ngRoute'])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/blogs.html',
          controller: 'MainController'
        })
        .when('/create-blog', {
          templateUrl: 'views/create-blog.html',
          controller: "MainController"
        })
        .when('/404', {
          template: '<h1> Sorry, page not found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });


  angular
    .module('nodeblog')
    .controller('MainController', function ($scope, MainService) {

      MainService.getBlog().success(function(data) {
        console.log(data);
        $scope.blogs = data;
      });

      $scope.submitBlog = function(blog) {
        MainService.sendBlog(blog).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.blog.title = data.title;
          $scope.blog.author = data.author;
          $scope.blog.blog = data.blog;
        });
      }

      $scope.getOne = function(name) {
        MainService.getBlogsByAuthor(name).success(function(data){
          console.log(data);
        })
      }
    });

  angular
    .module('nodeblog')
    .factory('MainService', function ($http) {
      var url = '/create-blog'
      function getBlog() {
        return $http.get('/blogs');
      }

      function sendBlog(blog) {
        return $http.post(url, blog);
      }

      function getBlogsByAuthor(name) {
        return $http.get('/blog-author/' + name);
      }

      return {
        sendBlog: sendBlog,
        getBlog: getBlog,
        getBlogsByAuthor: getBlogsByAuthor
      };
    });
})();
