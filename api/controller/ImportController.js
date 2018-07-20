var sequalizedbConnect_management = require('../../dbconnection/SequelizeDBConnection.js');
var appRoot = require('app-root-path');

module.exports = {
 
    sequalizedbConnect_management: sequalizedbConnect_management,
    responselistner: require(appRoot + '/utility/response.js'),
    constants: require(appRoot + "/utility/constants"),
    promise: require('promise'),
    countries: require('../models/countries')(sequalizedbConnect_management.sequelize, sequalizedbConnect_management.Sequelize),
    states: require('../models/states.js')(sequalizedbConnect_management.sequelize, sequalizedbConnect_management.Sequelize),
    cities: require('../models/cities.js')(sequalizedbConnect_management.sequelize, sequalizedbConnect_management.Sequelize)

};