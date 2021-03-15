const http = require('http');
// Meaning: require the 'http' module which allows for many APIs,
// including starting and using a server.
// NOTE: When this file is named *.js then this is the notation
// import http from 'http';
// NOTE: This is the ECMAScript notation. This notation is used when the file
// is named *.mjs


const server = http.createServer(
    (request, response) => {
        response.end('Hello World\n');
    }
);
// Meaning: create a server, a GET request to localhost on whatever port is
// specified will show this message 'Hello World' with a newline character
// NOTE: req and res are more commonly used, but they just stand for request &
// response

server.listen(
    4242,
    () => {
        console.log('Server is running...');
    }
);
// Meaning: make the server listen to connections (on localhost), allow
// HTTP requests on port 4242, and print out the 'Server is running...' message
// in the console where this script is invoked.
