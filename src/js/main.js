
  import AppController from './app-controller';

(function (){


  document.addEventListener('DOMContentLoaded', function (){
      ng.core.enableProdMode();
      ng.platform.browser.bootstrap(AppController)
  });

})();
