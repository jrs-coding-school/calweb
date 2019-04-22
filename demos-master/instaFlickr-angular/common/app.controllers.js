(function () {
  "use strict";

  angular
    .module('flickrgram')
    .controller('MainController', function ($scope) {
      var vm = this;
      vm.whatsup = "this is some text in the main controller."
    });

})();
