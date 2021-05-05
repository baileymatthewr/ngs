const templateGenerator = require('./4-function');
//templateGenerator is a function. This api is returning the function stored

const myTemplate = templateGenerator('Hello Node!');
//myTemplate is the template returned from calling the function.

console.log(myTemplate);
//while this does print out the completed template, this wouldn't be how you do
//this in a real application. HTML could be generated within a page, calling
//this API.
