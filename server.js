/**
 * Created by Afik on 18/06/2017.
 */


var express = require('express');
var config = require('./src/config/config');
var router = require('./src/routes/gettRouter');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
var port = process.env.PORT || config.server.port;


app.get('/', function (res, req) { //senity check
    res.send('Welcome to my Gett Challange');
});



app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, function () {
    console.log('Server is listening on port: ', port);
});