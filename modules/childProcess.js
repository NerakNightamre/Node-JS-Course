const { exec, spawn } = require('child_process');

// exec('node modules/console.js', (err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false
//     }

//     console.log(stdout);
// })

let process = spawn('cmd.exe', ['/c','dir']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function(dato){
    console.log('is Dead?');
    console.log(process.killed);
    console.log(dato.toString());
})


process.on('exit', function(){
    console.log('the Process has end');
    console.log(process.killed);
})