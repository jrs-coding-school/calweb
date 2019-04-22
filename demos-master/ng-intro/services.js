(function () {
  "use strict";
  angular
    .module('books')
    .factory('BooksService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/blakeShelton';
      var localBooks = [
        {
          title: "The Art of War",
          cover: "http://www.returnofkings.com/wp-content/uploads/2015/01/sun-tzu.jpg",
          description: "strategy stuff"
        },
        {
          title: "ng-Book",
          cover: "http://ecx.images-amazon.com/images/I/712vyspLr8L.jpg",
          description: "angular book"
        }
      ];
      var addBook = function (newBook) {
        $http.post(url, newBook).then(function (res) {
          console.log(res);
        });
      };

      var getBooks = function () {
        return $http.get(url);
      };

      return {
        createBook: addBook,
        getBooks: getBooks,
        getLocalBooks: localBooks
      };

    });
})();
