var StateController = function () {}

var importController = require('./ImportController.js');
var http = require('http');

StateController.getAll = function (params) {
    return new importController.promise(function (resolve, reject) {
        importController.states.findAll().then(function (result) {
            resolve(new importController.responselistner(null, result));
        }).catch(function (error) {
            reject(new importController.responselistner(error, null));
        });
    });
}

module.exports = StateController;