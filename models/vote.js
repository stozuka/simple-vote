'use strict';

module.exports = function(sequelize, DataTypes) {
  const Vote = sequelize.define('Vote', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vote;
};
