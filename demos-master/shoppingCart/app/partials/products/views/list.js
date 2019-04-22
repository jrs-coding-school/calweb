(function(module) {
try {
  module = angular.module('myAzon');
} catch (e) {
  module = angular.module('myAzon', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('products/views/list.html',
    '<h1>List of Products</h1><h2>{{prodCtrl.testData}}</h2>');
}]);
})();
