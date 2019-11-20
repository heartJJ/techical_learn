/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('number', {
    GUID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SL: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }
  }, {
    tableName: 'number'
  });
};
