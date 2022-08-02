const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf8');

// readableStream.on('data', function(chunk){
//     data += chunk;
// });

// readableStream.on('end', function(){
//     console.log(data);
// })

// process.stdout.write('Hey ');
// process.stdout.write('whats ');
// process.stdout.write('up ');

const Transform = stream.Transform;

function Capital(){
    Transform.call(this);
}

util.inherits(Capital, Transform);

Capital.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var upper = new Capital();

readableStream.pipe(upper).pipe(process.stdout);