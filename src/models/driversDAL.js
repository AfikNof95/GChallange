/**
 * Created by Afik on 18/06/2017.
 */
var pg = require('pg-promise')();
var config = require('../config/config');
var queries = require('./queries');
var driversFormmater = require('../utils/driversFormatter');

var connectionString = process.env.DATABASE_URL || config.postgreSQL.HEROKU_URI;
var postgreClient = pg(connectionString);

var driversDAL = (function () {

    function getDriverById(id) { //return Promise to the router
        var sql = queries.SELECT_DRIVER_BY_ID.replace('$ID', id); //In ES6 I could've used template literals for a cleaner code design.
        return postgreClient.any(sql);

    }

    function insertDrivers(data) {
        var sql = queries.IMPORT_DRIVERS;
        var sqlValues = driversFormmater(data);
        return postgreClient.none(sql.replace('$Values', sqlValues.join(',')))
    }

    return {
        getDriverById: getDriverById,
        insertDrivers: insertDrivers
    }
})();

module.exports = driversDAL;



