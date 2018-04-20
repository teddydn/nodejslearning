var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1() {
   console.log('listener listener1 executing.');
}

// listener #2
var listener2 = function listener2() {
  console.log('listener listener2 executing.');
}

// binden connection event,handle function is listener1 
eventEmitter.addListener('connection', listener1);

// binden connection event,handle function is listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listeners listen conncetion event");

// handle connection event 
eventEmitter.emit('connection');

// remove binded listener1 function 
eventEmitter.removeListener('connection', listener1);
console.log("listener1 did not be listened.");

// trigger connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listeners listen connection events.");

console.log("The program is executed.");