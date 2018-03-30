var Application = module.exports = {};

var STATE_INITED  = 1;  // app has inited
var STATE_START = 2;    // app start
var STATE_STARTED = 3;  // app has started
var STATE_STOPED  = 4;  // app has stoped

Application.init = function(opts){
    opts = opts || {};
    this.state = STATE_INITED;
};

Application.load = function(path, name){
    if(name){
        return require(path + name);
    }
    return require(path);
}