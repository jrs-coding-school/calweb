(function () {
  "use strict";
  angular
    .module('mahBooks.books', [
      'ngRoute',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/books', {
          templateUrl: 'books/books.html',
          controller: 'BooksController as booksCtrl'
        })
        .when('/books/:bookId', {
          templateUrl: 'books/bookDetail.html',
          controller: 'BooksController as booksCtrl'
        });
    });
})();
