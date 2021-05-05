const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout
//
const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});

//QUESTION: If I run this code, how many times will the message print?
//ANSWER: None. This is because you weren't listening for it first.
