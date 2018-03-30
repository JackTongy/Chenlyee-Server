var handlerManager = {};

var setResponseHandler = function(handler){
    handlerManager._responseHandler = handler;
};

var catchResponse = function(data){
    if(handlerManager._responseHandler){
        handlerManager._responseHandler(data)
    }
};

var setErrorHandler = function(handler){
    handlerManager._errorHandler = handler
};

var catchError = function(data){
    if(handlerManager._errorHandler){
        handlerManager._errorHandler(data);
    }
};

module.exports = {
    setResponseHandler:setResponseHandler,
    setErrorHandler:setErrorHandler,
    catchResponse:catchResponse,
    catchError:catchError,
};