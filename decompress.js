var fs = require("fs");
var zlib = require('zlib');

// decompress input.txt.gz file to input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("file decompress finished");