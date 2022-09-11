'use strict';
const {STRING,TEXT,FLOAT,INTEGER	}=require("sequelize")
const addItem = (sequelize, DataTypes) => {
  return sequelize.define('addItem', {
    Name_Product: {
      type:STRING,
    },
    postDescription: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.TEXT,
    },
    catagories: {
      type: DataTypes.TEXT,
    },
    country:{
      type: DataTypes.TEXT,
    },
    country:{
      type: DataTypes.TEXT,
    },
    image:{
      type: DataTypes.TEXT,
    },
    number_item:{
      type: DataTypes.INTEGER	,
    }
  });
};
module.exports = addItem;
