
import { Component } from '@angular/core';
import { Router } from '@angular/router';


var SecondView = Component({
  templateUrl: 'public/templates/second.html'
}).Class({

  constructor: function (router){
    this.router = router;
    this.value = "";
  },

  first: function(){
    this.router.navigate(["/view1"]);
  },


  third: function(){
    this.router.navigate(['/view3', this.value ]);

  }

});

SecondView.parameters = [[Router]];

export default SecondView;
