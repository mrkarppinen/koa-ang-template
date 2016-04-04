


(function (app){

  document.addEventListener('DOMContentLoaded', function (){
      ng.core.enableProdMode();
      ng.platform.browser.bootstrap(app.ExampleController)
  });

})(window.app || (window.app = {}));
