(function () {
  "use strict";
  angular
    .module('mahBooks.books')
    .factory('BooksService', function () {
      var _books = [
        {
          cover: 'http://ecx.images-amazon.com/images/I/51teQS2zYBL._SY344_BO1,204,203,200_.jpg',
          title: 'The Odyssey'
        },
        {
          cover: 'http://www.andysowards.com/blog/assets/Samurai_by_lubliner-680x1013.jpg',
          title: 'The Book of the Five Rings'
        },
        {
          cover: 'http://d.gr-assets.com/books/1388377980l/861511.jpg',
          title: 'I Ching'
        }
      ];

      var getBooks = function () {
        return _books;
      };

      return {
        getBooks: getBooks
      };


    });
})();
