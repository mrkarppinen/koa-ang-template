


(function (){

  var AppController = require('./app-controller');


  document.addEventListener('DOMContentLoaded', function (){
      ng.core.enableProdMode();
      ng.platform.browser.bootstrap(AppController)
  });

})();
