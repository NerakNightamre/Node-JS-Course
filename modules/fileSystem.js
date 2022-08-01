const fs = require('fs');

function read(dir, cb){
    fs.readFile(dir, (err, data) => {
        cb(data.toString());
    })
}

function write(dir, data, cb){
    fs.writeFile(dir, data, function(err){
        if(err){
            console.log('I cant Write', err);
        }else{
            console.log('successful write')
        }
    });
}

function erase(dir, cb){
    fs.unlink(dir, cb);
}
// write(__dirname + '/file1.txt', "im a new file");
// read(__dirname + '/file.txt', console.log)
erase(__dirname + '/file1.txt', console.log);