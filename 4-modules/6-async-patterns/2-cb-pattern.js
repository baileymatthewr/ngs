//This code goes through the Event Loop

const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
