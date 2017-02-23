



  import { Component} from '@angular/core';
  import { Router } from '@angular/router';


  var AppController = Component({

    selector: 'app',
    templateUrl: '/public/templates/app.html'

  }).Class({

      constructor: function (router){


      }

  });

AppController.parameters = [[Router]];

export default AppController;
