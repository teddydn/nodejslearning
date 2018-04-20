process.on('exit', function(code) {

// below code never executed
setTimeout(function() {
console.log("not executed");
}, 0);

console.log('exit code is:', code);
});
console.log("program is finished");