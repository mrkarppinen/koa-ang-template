

import { Component } from '../../node_modules/@angular/core';
import { Router, ActivatedRoute, Params } from '../../node_modules/@angular/router';



var ThirdView = Component({
  templateUrl: 'public/templates/third.html'
}).Class({

  constructor: function (router, activatedRoute){
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.id = '';
  },

  ngOnInit: function (){
    this.id =  this.activatedRoute.params._value['id'];//this.routeParams.get('id');
    console.log('on init:'+this.id);
  },

  first: function(){
    this.router.navigate(['/view1']);
  }

});

ThirdView.parameters = [[Router], [ActivatedRoute]];

export default ThirdView;
