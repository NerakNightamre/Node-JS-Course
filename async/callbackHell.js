function hello(name, myCallback){
    setTimeout(function(){
        console.log("hi, " + name);
        myCallback(name);
    },1500)
}

function talk(callbackTalk){
    setTimeout(function(){
        console.log('Bla Bla Bla Bla...');
        callbackTalk();
    },1000);
}

function bye(name, otherCallback){
    setTimeout(function(){
        console.log('GoodBye, ' + name);
        otherCallback();
    }, 1000)
}


function conversation(name, times, callback){
    if(times >= 0){
        talk(function(){
            conversation(name, --times, callback);
        })
    }else{
        bye(name, callback);
    }
}
// --
console.log('starting procress...');
hello('Mauri', function(name){
    conversation(name, 3, function(){
        console.log('Process finished');
    });
});
// hello('Mauri', function(name){
//     bye( 'mauri', function(){
//         console.log('Finished');
//     });
// });
// hello('Mauri', function(name){
//     talk(function(){
//         talk(function(){
//             bye(name, function(){
//                 console.log('Finishing process');
//             });
//         });
//     });
// });