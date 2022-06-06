'use strict';

const Food = (Sequelize, DataTypes) => {
  const Food = Sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  return Food;
}
module.exports = Food;