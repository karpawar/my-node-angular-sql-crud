var SequelizeObj = require("sequelize");
var sequelizeObj = new SequelizeObj("mysql://root:123456@localhost:3306/node_sql");
sequelizeObj
  .authenticate()
  .then(function(err) {
    console.log('Connection >> Established Successfully.');
  })
  .catch(function (err) {
    console.log('Connection Error >> Unable to connect to the database for version base:', err);
  });

module.exports.Sequelize = SequelizeObj;
module.exports.sequelize = sequelizeObj;