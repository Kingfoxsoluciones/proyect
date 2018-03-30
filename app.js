'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./routes');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api', api);


app.use(express.static(path.join(__dirname, 'dist')));

/*app.use('*', function (req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});*/


module.exports = app
