async function hello(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("hi, " + name);
            resolve(name);
        },1500);
    });
}

async function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla Bla Bla Bla...');
            // resolve(name)
            resolve('something wrong');
        },1000);
    })
}

async function bye(name, otherCallback){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('GoodBye, ' + name);
            resolve(name);
        }, 1000);
    });
}

async function main(){
    let name = await hello('Mauri');
    await talk();
    await talk();
    await talk();
    await talk();
    await bye(name);
    console.log('Finishing Process');
}

console.log('Starting process');
main();
console.log('Finishing Process')