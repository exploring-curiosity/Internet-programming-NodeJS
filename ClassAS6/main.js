var events = require("events");
var eventEmitter = new events.EventEmitter();
var helper = function helper(){
    console.log('Please Help me.');
}
eventEmitter.addListener('help',helper);
eventEmitter.emit('help');
console.log("End of Program");