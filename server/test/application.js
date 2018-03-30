var chenlyee = require('../');
var app = require('../lib/application');
var should = require('should');

describe('Application', function(){
    describe('#init', function(){
        it('should init the application', function(){
            app.init();
            app.state.should.equal(1);
        });
    });
});