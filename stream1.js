var fs = require("fs");
var data = ':www.runoob.com';

// create write stream to write in output.txt
var writerStream = fs.createWriteStream('output.txt');

// use utf8 encode to write
writerStream.write(data,'UTF8');

// mark file end
writerStream.end();

// handle stream --> data, end, and error
writerStream.on('finish', function() {
    console.log("write complete");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("program finished");