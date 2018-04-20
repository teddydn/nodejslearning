var fs = require("fs");
var data = '';

// create read stream
var readerStream = fs.createReadStream('input.txt');

// set encode is utf8
readerStream.setEncoding('UTF8');

// handle stream  --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("program is finished.");