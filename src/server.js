



'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
const http = require('http')
const cors=require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();
const PORT = process.env.PORT || 3010;

// Local requires
const logger = require('./middleware/logger');
const userRouter = require('./routes/user.route');
const notFoundErrorHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500');


//Routes
app.use(express.json());
app.use(logger);
app.use(userRouter);
app.use('*', notFoundErrorHandler);
app.use(internalErrorHandler);






app.use(cors({
  origin: '*',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,            //access-control-allow-credentials:true
}))


// support url encoded bodies{parser use to accept the encoded json come from front }
app.use(express.urlencoded({ extended: false }));
// support json encoded bodies
app.use(express.json());






//-----------------------------------------------routes section--------------------------------------------//
const AllPostes_Routes=require("./routes/All_Postes");
app.use(AllPostes_Routes)







//----------------------------------------DataBase Connection----------------------------------------------//

//Connection With The Database
const database=require("./models/index.model");
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  app.listen(PORT, async() => {
        try {
            await database.sync();  
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
  

//---------------------------------------export file section---------------------------------------------//
    module.exports ={
      app: app,
      start: start,
};
