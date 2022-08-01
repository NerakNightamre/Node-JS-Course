function hello(name, myCallback){
    setTimeout(function(){
        console.log("hi, " + name);
        myCallback(name);
    },1000)
}

function bye(name, otherCallback){
    setTimeout(function(){
        console.log('bye, ' + name);
        otherCallback();
    }, 1000)
}

console.log('starting procress...');
hello('Mauri', function(name){
    bye(name, function(){
        console.log('Finishing process');
    })
})