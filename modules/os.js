const os = require('os');

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus().length);

console.log(os.constants);

console.log(os.freemem());

const SIZE = 1024;
function kb(bytes){ return bytes / SIZE; }
function mb(bytes){ return kb(bytes) / SIZE; }
function gb(bytes){ return mb(bytes) / SIZE; }


console.log('kb free: ' + kb(os.freemem()));
console.log('mb free: ' + mb(os.freemem()));
console.log('Gb free: ' + gb(os.freemem()));
console.log('Total memory: ' + gb(os.totalmem()));

console.log('Home Directory ' + os.homedir());
console.log('temporal Directory ' + os.tmpdir());

console.log('Hostname ' + os.hostname());

console.log('Network interfaces ' + os.networkInterfaces());