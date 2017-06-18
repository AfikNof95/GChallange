/**
 * Created by Afik on 18/06/2017.
 */
var queries = module.exports = {

    'SELECT_DRIVER_BY_ID': 'SELECT * FROM drivers WHERE id=$1',
    'IMPORT_DRIVERS':'INSERT INTO drivers(id,name,license_number) VALUES$1'

};


