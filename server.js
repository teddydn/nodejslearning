var http = require('http');

http.createServer(function (request, response) {

// send HTTP head 
// HTTP status: 200 : OK
// content type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});

// send response data "Hello World"
response.end('Hello World\n');
}).listen(8888);

// console print
console.log('Server running at http://127.0.0.1:8888/');