var chenlyee = require('../');
var should   = require('should')

describe('Chenlyee', function(){
    describe('#createApp', function(){
        it('should create and get app, be the same instance', function(done) {
            var app = chenlyee.createApp();
            should.exist(app);
      
            var app2 = chenlyee.app;
            should.exist(app2);
            should.strictEqual(app, app2);
            done();
          });
    });
});