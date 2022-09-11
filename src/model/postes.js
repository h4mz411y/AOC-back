const {STRING,TEXT,FLOAT,INTEGER	}=require("sequelize")

const database=require("../database/database")

const postes = database.define('postes', {
    // Model attributes are defined here
    Name_Product: {
      type:STRING,
    },
    postDescription: {
      type: STRING,
    },
    description: {
      type: TEXT,
    },
    price: {
      type: TEXT,
    },
    catagories: {
      type: TEXT,
    },
    country:{
      type: TEXT,
    },
    country:{
      type: TEXT,
    },
    image:{
      type: TEXT,
    },
    number_item:{
      type: INTEGER	,
    }
    
  }, {
    timestamps: false
  });

  
  module.exports =postes