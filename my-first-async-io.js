var fs = require('fs')  
var file = process.argv[2]  
fs.readFile(file,function(err, contents) {
    if(err) {
        console.error(err)
        return
    }
    console.log(contents.toString().split('\n').length - 1)  
})
