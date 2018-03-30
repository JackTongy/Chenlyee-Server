var net = require('net');
var defalut_timeout = 20;
var SocketIdMaker = 0;
var _debug = true;

var ctor = function(host, port, callback){
    if(_debug){
        console.log(host + port);
    }

    //
    var handlerOrder = 0;
    var order_generator = function(){
        return ++handlerOrder;
    }

    var client = net.connect({host:host, port:port}, function(){

    });
    
    client.on('data', function(chunk){
    
    });
    
    client.on('end', function(){
    
    });

    client.on('error', function(err){

    });

    client.on('close', function(err){

    });
    return client;
};

module.exports = {
    ctor:ctor,
};