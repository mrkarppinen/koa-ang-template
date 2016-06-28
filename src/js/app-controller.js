

  import FirstView from './first-view';
  import SecondView from './second-view';
  import ThirdView from './third-view';


  var AppController = ng.core.Component({

    selector: 'app',
    templateUrl: '/public/templates/app.html',
    directives: [ng.router.ROUTER_DIRECTIVES],
    providers: [ng.router.ROUTER_PROVIDERS]

  }).Class({

      constructor: function (router){

        router.config([
            {path: '/view1', component: FirstView, name: 'FirstView', useAsDefault: true},
            {path: '/view2', component: SecondView, name: 'SecondView'},
            {path: '/view3/:id', component: ThirdView, name: 'ThirdView'}
        ]);

      }

  });

AppController.parameters = [[ng.router.Router]];

export default AppController;
