var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext= '.' +process.argv[3];

fs.readdir(directory, function(err,list)  {
    if (err) {
        return console.error('Error:', err);
    }

    list.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});