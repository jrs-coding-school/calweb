(function(module) {
try {
  module = angular.module('myAzon');
} catch (e) {
  module = angular.module('myAzon', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cart/views/list.html',
    '<div class=""><ul><li><a href="">this is text</a></li><li><a href="">this is text</a></li><li><a href="">this is text</a></li></ul></div>');
}]);
})();
