
var chai = require('chai'),
  should = chai.should();



  describe('Example test', function (){

    var map = null;

    beforeEach(function (){

      map = new Map();
      map.set('val', 5);

    });

    it('should test something', function (){

      map.has('val').should.equal(true);
      map.get('val').should.equal(5);

    });


  });
