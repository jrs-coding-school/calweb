(function () {
  "use strict";

  angular
    .module('myAzon.products')
    .controller('ProductsController', function (ProductsService) {
      // stuff for products here
      var vm = this;
      vm.testData = "Just here to show some datas, for your betas!";
      var vm = this;
      ProductsService.getData().success(function (data) {
        console.log(data.findItemsByKeywordsResponse[0].searchResult[0].item);
        var mjsStuff = data.findItemsByKeywordsResponse[0].searchResult[0].item;
        mjsStuff.forEach(function (el) {
          console.log(el.title);
        })
      });

    });

})();
