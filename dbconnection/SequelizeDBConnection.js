var SequelizeObj = require("sequelize");
var sequelizeObj = new SequelizeObj("mysql://root:root@localhost:3306/KP");
sequelizeObj
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database for version base:', err);
  });

module.exports.Sequelize = SequelizeObj;
module.exports.sequelize = sequelizeObj;