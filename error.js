var events = require('events'); 
var emitter = new events.EventEmitter();  
emitter.on('error', function() { 
console.log('error event triggered'); 
});
emitter.emit('error'); 



