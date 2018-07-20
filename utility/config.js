var constants = require('./constants');
var config = {};

if (constants.isOnTestServer) {
    console.log('KPHOST >> Configuring Test Server . . . ');
    config.database_connection = "mysql://root:WGZssw@localhost:3306/default_database";
    config.port_number = 3333;
} else if (constants.isOnLocalServer) {
    console.log('KPHOST >> Configuring Local Server . . . ');
    config.database_connection = "mysql://root:123456@192.168.150.25:3306/node_sql";
    config.port_number = 8004;
} else {
    console.log('Server Configuration  not found in utility/constants.js');
}

console.log('HOST URL >> ' + config.database_connection);
console.log('HOST PORT >> ' + config.port_number);

module.exports = config;