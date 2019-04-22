(function () {


  angular
    .module('books')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
    alert('hello!');

      };
      $scope.msg = "this is a secret message";
    })
    .controller('BooksController', function ($scope, BooksService) {

      BooksService.getBooks().success(function (books) {
        console.log(books);
        $scope.warBooks = books;

      });

      $scope.sampleData = 1000;
      $scope.localBooks = BooksService.getLocalBooks;


      $scope.addBook = function (newBook) {
        console.log(newBook);
        BooksService.createBook(newBook);
      };

    });


})();
