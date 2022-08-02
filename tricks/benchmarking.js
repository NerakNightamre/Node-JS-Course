const { resolve } = require("path");

let sum = 0;

console.time('loop');
for (let i = 0; i < 100000000; i++) {
    sum += 1; 
}

console.timeEnd('loop');

console.time('async');
function Async(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('Finish Async Process');
        })
    })
}

Async()
    .then(() =>{
        console.timeEnd('async');
    })