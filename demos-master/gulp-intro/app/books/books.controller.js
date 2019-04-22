(function () {
  "use strict";
  angular
    .module('mahBooks.books')
    .controller('BooksController', function (BooksService) {
      var vm = this;
      vm.books = BooksService.getBooks();

      vm.alertMe = function () {
        alert("me");
      };
      vm.logMe = function (text) {
        console.log(text);
      };
    });
})();
