(function () {
  "use strict";

  angular
    .module('books', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>hello angular</h1><a href="#/books">go to books</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          controller: 'MainController'
        })
        .when('/books', {
          templateUrl: 'views/books/list.html',
          controller: 'BooksController'

        })
        .when('/books/:bookId', {
          templateUrl: 'views/books/show.html',
          controller: 'BooksController'
        })
        .when('/books/:bookId/edit', {
          templateUrl: 'views/books/edit.html',
          controller: 'BooksController'
        })
        .when('/addBook', {
          templateUrl: 'views/books/create.html',
          controller: 'BooksController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
