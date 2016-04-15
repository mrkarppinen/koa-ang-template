



var ThirdView = ng.core.Component({
  templateUrl: 'public/templates/third.html'
}).Class({

  constructor: function (router,routeParams){
    this.routeParams = routeParams;
    this.router = router;
    this.id = '';
  },

  ngOnInit: function (){
    this.id = this.routeParams.get('id');
    console.log('on init:'+this.id);
  },

  first: function(){
    this.router.navigate(['FirstView']);
  }

});

ThirdView.parameters = [[ng.router.Router], [ng.router.RouteParams]];

module.exports = ThirdView;
