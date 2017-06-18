/**
 * Created by Afik on 18/06/2017.
 */
var express = require('express');
var DriversDAL = require('../models/driversDAL');
var router = express.Router();
var fs = require('fs');


router.get('/driver/:id', function (req, res, next) {
    DriversDAL.getDriverById(req.params.id).then(function (response) {
        res.send(response);
    }).catch(function (error) {
        res.send(error);
    });
});

router.post('/import', function (req, res, next) {

    // var drivers = require('../../Gett.json');
    readJson().then(function (data) {
        DriversDAL.insertDrivers(data).then(function () {
            res.send({status: 200, message: 'Import ended successfully!'});
        })
            .catch(function (error) {
                res.send(error);
            });
    });


});


function readJson() {
    return new Promise(function (resolve, reject) {
        var index = 0;
        var jsonData = '';
        var data = fs.createReadStream('Gett.json', 'utf8');
        data.on('data', function (data) {
            console.log(++index, data);
            jsonData += data;
        });
        data.on('error', function (err) {
            console.log(err);
            reject(err);
        });
        data.on('end', function () {
            console.log(JSON.parse(jsonData));
            resolve(JSON.parse(jsonData));
        });
    });

}


module.exports = router;