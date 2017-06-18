/**
 * Created by Afik on 18/06/2017.
 */


var express = require('express');
var config = require('./config/config');
var router = require('./routes/gettRouter');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || config.server.port;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, function () {
    console.log('Server is listening on port: ', port);
});