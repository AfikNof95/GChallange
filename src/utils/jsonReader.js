/**
 * Created by Afik on 18/06/2017.
 */
var fs = require('fs');

module.exports = function (file) {
    return new Promise(function (resolve, reject) {
        var filePath = file || 'Gett.json';
        var jsonData = '';
        var data = fs.createReadStream(filePath,'utf8');
        data.on('data', function (data) {
            jsonData += data;
        });
        data.on('error', function (err) {
            reject(err);
        });
        data.on('end', function () {
            resolve(JSON.parse(jsonData));
        });
    });

};