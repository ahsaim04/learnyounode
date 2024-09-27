var fs = require('fs');
var path = require('path');

module.exports = function (directory, ext, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);  
        }

      
        list = list.filter(function (file) {
            return path.extname(file) === '.' + ext;
        });

       
        callback(null, list);
    });
};