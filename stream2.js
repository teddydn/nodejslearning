var fs = require("fs");

// create a read stream
var readerStream = fs.createReadStream('input.txt');

// create a write stream
var writerStream = fs.createWriteStream('output.txt');

// pipe write stream
// read input.txt content,and write the content to output.txt 
readerStream.pipe(writerStream);

console.log("program finished");