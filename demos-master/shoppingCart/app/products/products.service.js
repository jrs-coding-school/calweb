(function () {
  "use strict";
  angular
    .module('myAzon.products')
    .factory('ProductsService', function ($http) {
      var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=CalvinDW-1404-4258-a97f-4a2947858b65";
    // url += "&SECURITY-APPNAME=CalvinDW-3c26-4920-8694-8b52be81f357";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=JSON_CALLBACK";
    url += "&REST-PAYLOAD";
    url += "&keywords=michael%20jackson";
    url += "&paginationInput.entriesPerPage=100";
    function getData() {
      return $http.jsonp(url);
    }
      return {
        getData: getData
      };
    })

})();
