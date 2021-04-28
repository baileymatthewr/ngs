# Modern JavaScript

## Variables and Block Scopes
* Keywords 'const', 'let' and 'var' are not equivallent
* 'const' is used to be a constant reference to something. In the case of scalar values, such as 42 or 'hello' these become immutable, as expected. However, if you use 'const' with arrays or objectsall bets are off. It is still a constant reference to the object or array, but the values within them could possibly change. If you want this functionality, you must use "Object.freeze()" or "Array.freeze()" and know that it is going to be required for every layer, as deep as the array or object goes.
* 'let' is used to stop scope leakage. If you use it in a for loop or a block scope, it will go out of scope once the final curly brace is encountered.
* 'var' is used to declare a variable, but is kind of meaningless beyond that. This doesn't prevent scope leakage like 'let' and 'const' do.
* Immutability is better achieved through the use of the "Immutable.js" library
* Try to use 'const' with scalar values that you don't want changing. It is a guarantee for the value later on in the program.

## Arrow Function
* Try and use this as much as possible, because of consistency with the 'this' keyword
* It is also more consistent with functional programming

## Object Literals
* 

