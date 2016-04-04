
(function (app){


  app.ExampleController = ng.core.Component({
    selector: 'app',
    templateUrl: '/public/templates/app.html'
  }).Class({

    constructor: function (){
      console.log('ExampleController up and running!!');
    }

  });


})(window.app || (window.app = {}));
