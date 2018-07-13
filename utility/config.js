var constants = require('./constants');
var config = {};

if (constants.isOnTestServer) {
    config.database_connection = "mysql://root:WGZssw@localhost:3306/hcc_with_default_columns";
    config.port_number = 3333;
} else if (constants.isOnLocalServer) {
    config.database_connection = "mysql://root:123456@192.168.150.25:3306/hcc_12062018";
    config.port_number = 8004;
} else {
    console.log('Server Configuration  not found in utility/constants.js');
}

console.log('Databse Connection:' + config.database_connection);
console.log('Port Number:' + config.port_number);

module.exports = config;