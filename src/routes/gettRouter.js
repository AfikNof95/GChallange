/**
 * Created by Afik on 18/06/2017.
 */
var express = require('express');
var DriversDAL = require('../models/driversDAL');
var router = express.Router();

router.get('/driver/:id', function (req, res, next) {
    DriversDAL.getDriverById(req.params.id).then(function (response) {
        res.send(response);
    }).catch(function (error) {
        res.send(error);
    });
});

router.post('/import', function (req, res, next) {
    var drivers = require('../../Gett.json');
    DriversDAL.insertDrivers(drivers).then(function () {
        res.send({status: 200, message: 'Import ended successfully!'});
    })
        .catch(function (error) {
            res.send(error);
        });
});


module.exports = router;