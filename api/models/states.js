/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('states', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'states',
    timestamps: false
  });
};
