/**
 * Created by Afik on 18/06/2017.
 */
var pg = require('pg-promise')();
var config = require('../config/config');
var queries = require('./queries');
var driversFormmater = require('../utils/driversFormatter');

var connectionString = process.env.DATABASE_URL || config.postgreSQL.DATABASE_URL || config.postgreSQL.HEROKU_URI;
var postgreClient = pg(connectionString);

var driversDAL = (function () {

    function getDriverById(id) { //return Promise to the router
        var sql =queries.SELECT_DRIVER_BY_ID; //In ES6 I could've used template literals for a cleaner code design.
        return postgreClient.one(sql, id);

    }

    function insertDrivers(data) {
        var sql = queries.IMPORT_DRIVERS;
        var sqlValues = driversFormmater(data).join(',');
        return postgreClient.none(sql.replace('$1',sqlValues))
    }

    return {
        getDriverById: getDriverById,
        insertDrivers: insertDrivers
    }
})();

module.exports = driversDAL;



