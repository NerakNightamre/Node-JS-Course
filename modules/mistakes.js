function otherFunction(){
    return isBroken();
}

function isBroken(){
    return 3 + z;
}

function isBrokenAsync(cb){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error in my Async function');
            cb(error)
        }
    })
}

try {
    isBrokenAsync(function(error){
        console.log(error.message);
    })
} catch (error) {
    console.error('wow, something has broken...');
    console.log(error.message);
    console.log('but don`t worry, we`ve catched it :)')
}

console.log('this is the end');