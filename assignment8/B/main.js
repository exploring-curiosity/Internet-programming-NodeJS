var fs=require('fs');
var http = require("http");
var url = require('url');
http.createServer(function (request, response) {
    const queryObject = url.parse(request.url,true).query;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('../input.txt', function (err, data) {
        if (err) return console.log("File Not Found");
        data+='';
        var x=data.split(/\r?\n/)
        var greet = x[Math.floor(Math.random()*x.length)]
        response.write(greet);
        response.write(" ");
        response.end(queryObject['name']);
    });
}).listen(8080);