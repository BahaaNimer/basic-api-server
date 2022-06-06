'use strict';

const Clothes = (Sequelize, DataTypes) => {
  const Clothes = Sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  return Clothes;
}
module.exports = Clothes;