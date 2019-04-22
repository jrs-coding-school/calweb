(function () {
  "use strict";

  angular
    .module('mahBooks.books')
    .directive('mahBook', function () {
      return {
        restrict: 'E', // E - element, A - attributes, C - class, M - comment
        transclude: true,
        templateUrl: 'books/books.directive.html',
        scope: {
          clickmetext: "@",
          book: "=",
          action: "&"
        },
        link: function (scope, element, attributes) {
          console.log('scope: ', scope.book.title);
          element.on('mouseover', function (evt) {
            element.find('article').children().toggleClass('blue')
          });
          element.append(attributes.markup);
          console.log('attributes: ',attributes);
        }

      }
    });


})();
