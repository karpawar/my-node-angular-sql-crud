var CountryController = function () {}

var importController = require('./ImportController.js');
var http = require('http');

CountryController.getAll = function (params) {
    return new importController.promise(function (resolve, reject) {
        importController.countries.findAll().then(function (result) {
            resolve(new importController.responselistner(null, result));
        }).catch(function (error) {
            reject(new importController.responselistner(error, null));
        });
    });
}

module.exports = CountryController;