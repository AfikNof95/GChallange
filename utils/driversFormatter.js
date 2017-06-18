/**
 * Created by Afik on 18/06/2017.
 */
function formatJson(data) {
    var sqlValues = [];
    data.forEach(function (driver) {
        // var singleDriverData = driver['id'] + ",'" + driver['name'] + "','" + driver['license_number'] + "'";
        
        var singleDriverData = Object.keys(driver).map(function (key) {
         return "'"+driver[key]+"'";
         }).join(',');

        sqlValues.push('(' + singleDriverData + ')');
    });
    return sqlValues;
}

module.exports = formatJson;