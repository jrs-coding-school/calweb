(function(module) {
try {
  module = angular.module('myAzon');
} catch (e) {
  module = angular.module('myAzon', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('main.html',
    '<h1>hello people!</h1><a href="#/products">products</a> <a href="#/cart">cart</a>');
}]);
})();
