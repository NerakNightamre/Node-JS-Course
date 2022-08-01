// const process = require ('process');


process.on('beforeExit',() => {
    console.log("Mauri, the process is going to end");
});


process.on('exit',() => {
    console.log("Mauri, the process has end");
});

process.on('uncaughtException', (err, source) => {
    console.error('Damn, I forgot cath a mistake');
    console.error(err.message);

});

functionDoesntExist();
process.on('uncaughtException')


