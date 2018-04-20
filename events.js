// Introduce the events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
var connectHandler = function connected() {
   console.log('Connection is successful.');
  
// Triggers the data_received event
   eventEmitter.emit('data_received');
}

// Binding the connection event handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event using an anonymous function
eventEmitter.on('data_received', function(){
   console.log('Data received successfully.');
});

// Trigger connection event
eventEmitter.emit('connection');

console.log ("The program is executed.");
