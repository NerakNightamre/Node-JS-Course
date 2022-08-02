const { callbackify } = require("util");

function Async(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a);
        }catch(e){
            callback(e, null);
        }
    }, 1000)
}

try{
    Async(function(err, data){
        if(err){
            // console.error('We have a error');
            // console.error(err);
    
            // return false;
            throw err;
        }
    
        console.log ('Everything OK! my data is ', data)
    })
}catch(e){
    console.error('We have a error');
    console.error(err);
}