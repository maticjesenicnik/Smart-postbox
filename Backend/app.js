const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    response.send('Hello from Express!')
  });

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
 */