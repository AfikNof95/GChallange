/**
 * Created by Afik on 18/06/2017.
 */
var fs = require('fs');

module.exports = function () {
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

};