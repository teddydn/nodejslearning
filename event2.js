var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
console.log('starting...');
event.on('some_event', function() {
console.log('some_event event triggered!');
});
console.log('going...');
setTimeout(function() {
event.emit('some_event'); 
}, 5000);
console.log('finishing');