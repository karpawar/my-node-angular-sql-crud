var express = require('express');
var staterouter = express.Router();
var Promise = require('promise');

staterouter.get('/getall', function (req, res, next) {
    var StateController = require('../api/controller/StateController.js');
    var getAll = Promise.nodeify(StateController.getAll);
    getAll(req.body).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = staterouter;