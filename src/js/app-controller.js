



  import { Component} from '../../node_modules/@angular/core';
  import { Router } from '../../node_modules/@angular/router';


  var AppController = Component({

    selector: 'app',
    templateUrl: '/public/templates/app.html'

  }).Class({

      constructor: function (router){


      }

  });

AppController.parameters = [[Router]];

export default AppController;
