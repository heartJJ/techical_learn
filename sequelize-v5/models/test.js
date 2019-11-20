/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'test'
  });
};
