//Each of these are run synchronously through the OS synchronous file reading
//API.

const fs = require('fs');

const data = fs.readFileSync(__filename);

console.log('File data is', data);

console.log('TEST');
