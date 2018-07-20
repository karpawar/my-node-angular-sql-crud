var express = require('express');
var countryrouter = express.Router();
var Promise = require('promise');

countryrouter.get('/getall', function (req, res, next) {
    var CountryController = require('../api/controller/CountryController.js');
    var getAll = Promise.nodeify(CountryController.getAll);
    getAll(req.body).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = countryrouter;