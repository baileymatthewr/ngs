// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;
/* This line above is the shorter way of destructuring what is possibly done
 * with lines 1 through 3. While this is weird to the uninitiated, it is quite
 * common in certain scenarios. Math is the prime example.
 */


// With require
// const { readFile } = require('fs');
/* This line above works the same way as line 5. The difference here is that
 * it uses the 'require' syntax. It works the same way though.
 */

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );
/* Lines 18 through 28 show an example of destructuring an object. This can,
 * in some ways, lead to readability of a function. 'circle' is destructured
 * to get it's radius property and only work with that.
 */
