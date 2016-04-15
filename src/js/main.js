


(function (app){

  var ExampleController = require('./example-controller');

  document.addEventListener('DOMContentLoaded', function (){
      ng.core.enableProdMode();
      ng.platform.browser.bootstrap(ExampleController)
  });

})(window.app || (window.app = {}));
