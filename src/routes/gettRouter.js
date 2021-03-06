/**
 * Created by Afik on 18/06/2017.
 */
var express = require('express');
var DriversDAL = require('../models/driversDAL');
var router = express.Router();
var jsonReader = require('../utils/jsonReader');
var formidable = require('formidable');


router.get('/driver/:id', function (req, res, next) {
    DriversDAL.getDriverById(req.params.id).then(function (response) {
        res.json(response);
    }).catch(function (error) {
        res.send(error);
    });
});


router.post('/import', function (req, res, next) { //imports file from form-data, if undefined imports the default local json Gett.json
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (files.file) {
            jsonReader(files.file.path).then(function (data) {
                DriversDAL.insertDrivers(data).then(function () {
                    res.json({status: 200, message: 'Import ended successfully!'});
                })
                    .catch(function (error) {
                        res.send(error);
                    });
            }).catch(function (error) {
                res.send(error);
            });
        }
        else {
            res.status(500);
            res.send('Please send a file with key file');
        }
    })
});

module.exports = router;


/*
 router.post('/import/local', function (req, res, next) { //imports local json file
 jsonReader().then(function (data) {
 DriversDAL.insertDrivers(data).then(function () {
 res.send({status: 200, message: 'Import ended successfully!'});
 })
 .catch(function (error) {
 res.send(error);
 });
 }).catch(function (error) {
 res.send(error);
 });


 });
 */
