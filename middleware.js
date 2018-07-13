var Promise = require('promise');
var excludedPaths = [];
//All urls should always be in lower case here

module.exports = function (options) {
    var middleware = function (req, res, next) {
        console.log('in middleware');
        next();
    };
    middleware.unless = require('express-unless');

    return middleware;
}