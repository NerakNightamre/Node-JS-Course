const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('new ask');
    console.log(req.url);

    switch(req.url){
        case '/Hi':
            res.write('Hey! Whats Up');
            res.end();
            break;

        default:
            res.write('Error 404: Not Found');
            res.end()
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'});

    // res.write('Hi, I know How to use HTTP with NodeJs ');

    // res.end();
}

console.log('Listening HTTP in port 3000');