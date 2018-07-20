var express = require('express');
var cityrouter = express.Router();
var Promise = require('promise');

cityrouter.get('/getall', function (req, res, next) {
    var CityController = require('../api/controller/CityController.js');
    var getAll = Promise.nodeify(CityController.getAll);
    getAll(req.body).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = cityrouter;