const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const postBoxRoutes = require('./routes/postBox');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * For angular to work with nodeJS
 */
app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT ,DELETE, OPTIONS");
  next();
});

/**
 * Connection to cloud database(MongoDb)
 */
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://dbVidMatic:projekt123@smartpostbox-58poe.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology:true }).then(() =>{
  console.log('Connected to the database!');
}).catch(()=>{
  console.log('Connection failed!');
});


/**
 * All routes and URL's
 */
app.use("/api/user",userRoutes);
app.use("/api/postBox", postBoxRoutes);
app.use("/api/admin", adminRoutes);
module.exports = app;

/**
 * Instaliral sem naslednje:
 * -    npm install
 * -    npm install --save express
 * -    npm init
 * -    npm install --save-dev nodemon
 * -    npm install body-parser
 * -    npm install mongoose
 * -    npm install http
 * -    npm install debug
 * -    npm install jsonwebtoken
 * -    npm install --save mongoose-unique-validator
 * -    npm install bcrypt
 */