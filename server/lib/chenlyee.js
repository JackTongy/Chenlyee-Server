var Package     = require('../package');
var application = require('./application');

var Chenlyee = module.exports = {};

Chenlyee.version = Package.Version;

Chenlyee.components = {};

Chenlyee.connectors = {};
Chenlyee.connectors.__defineGetter__('socket', application.load.bind(null, './connectors/socket'));

var self = this;

Chenlyee.createApp = function(opts){
    application.init(opts);
    self.app = application;
    return self.app;
}

Object.defineProperty(Chenlyee, 'app', {
    get:function () {
      return self.app;
    }
});