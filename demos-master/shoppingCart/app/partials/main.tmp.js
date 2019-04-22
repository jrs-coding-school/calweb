(function(module) {
try {
  module = angular.module('myAzon');
} catch (e) {
  module = angular.module('myAzon', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('main.tmp.html',
    '<h1>Hello world</h1><a href="#/products">products</a> <a href="#/cart">cart</a>');
}]);
})();
