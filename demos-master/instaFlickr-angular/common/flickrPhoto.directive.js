(function () {
  "use strict"; // <flickr-photo>
  angular
    .module('flickrgram')
    .directive('flickrPhoto', function () {
      return {
        restrict: 'E',
        templateUrl: 'common/views/flickrPhoto.directive.html',
        scope: {
          photo: '=',
          action: '&'
        },
        transclude: true
      };
    });

})();
