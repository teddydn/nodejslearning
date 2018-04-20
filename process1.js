// output to console
process.stdout.write("Hello World!" + "\n");

// read from param
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// get execution path
console.log(process.execPath);


// platform information
console.log(process.platform);