



var SecondView = ng.core.Component({
  templateUrl: 'public/templates/second.html'
}).Class({

  constructor: function (router){
    this.router = router;
    this.value = "";
  },

  first: function(){
    this.router.navigate(['FirstView']);
  },


  third: function(){
    this.router.navigate(['ThirdView', {id: this.value}]);
  }

});

SecondView.parameters = [[ng.router.Router]];

module.exports = SecondView;
