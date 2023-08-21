var http = require('http')

var port = 2001

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'content type':'text/plain'});
        res.write('hello world node js');
        res.end();
    }

    else if(req.url == '/aboutus'){
        res.writeHead(200,{'content type':'text/plain'});
        res.write('<h1>About us page</h1>');
        res.end();
    }

    else if(req.url == '/contact'){
        res.writeHead(200,{'content type':'text/plain'});
        res.write('<h1>Contact us </h1>');
        res.end();
    }
});

server.listen(port)
console.log(`server started with port ${port}`);