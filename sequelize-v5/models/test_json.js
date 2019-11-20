/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_json', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    val: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'test_json'
  });
};
