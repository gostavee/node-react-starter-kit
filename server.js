/**
* Required modules
*/
const path = require('path');
const express = require('express');
const app = express();
const DB = require('./database/db');
const API = require('./api');
/**
* Globals
*/
global.rootPath = path.resolve(__dirname);
/**
* Init the api
*/
API(app);
/**
* server static directory
*/
app.use(express.static(path.join(global.rootPath, '/dist')));
app.use(express.static(path.join(global.rootPath, '/app/resources')));
/**
* Going live
*/
app.listen({port:7070});
