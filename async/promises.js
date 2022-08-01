function hello(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("hi, " + name);
            resolve(name);
        },1500);
    });
}

function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla Bla Bla Bla...');
            // resolve(name)
            reject('something wrong');
        },1000);
    })
}

function bye(name, otherCallback){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('GoodBye, ' + name);
            resolve(name);
        }, 1000);
    });
}


// -- always "catch" after promise
console.log('process started...');
hello('Mauri')
    .then(talk)
    .then(bye)
    .then((name) => {
        console.log('process finished');
    })
    .catch(error => {
        console.error('unexpeted error');
        console.error(error);
    })

