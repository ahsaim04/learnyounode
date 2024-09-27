var fs = require('fs')  
var file = process.argv[2]  
fs.readFile(file,function(err, contents) {
    if(err) {
        console.error(err)
        return
    }
    var count = contents.toString().split('\n').length - 1 ; 
    console.log(count)  
})