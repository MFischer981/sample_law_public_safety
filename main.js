// inline comment

/* Tis is a multi line
comment */

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

// Global variable
var myName = 'Micah';

myName = 8

// Within Scope
let ourName = 'freeCodeCamp'

// Constant (Never Change)
const pi = 3.14;

// Assign Variables
var a;

// Declare Variables (=) is the Assignment operator
var b = 2; 

// Variable has already been declared - now value is assigned
a = 7

// Assigned value of a to b;
b = a;

// Show on console
console.log(a);

// Initialized variable;
var a = 9;

// Uninitialized variable;
var a;

// Variables are case sensitive;
// Common to use Camel Case

properCamelCase = 'Use camel case.'

// Adding numbers
var sum = 10 + 10;
console.log(sum);

var difference = 20 - 10;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 3;
console.log(quotient);

// Increase
var increase = 0;
// Slower way
increase = increase + 1;
// Faster way
increase++;

// Decrease
var decrease = 0;
// Slower way
decrease = decrease - 1;
// Faster way
decrease--;

// Decimals or floats
var myDecimal = 5.8;
var myOtherDecimal = .005;

// Multiplying decimals
var product = 2.0 * 2.5;
console.log(product);

// Divide decimals
var quotient = 4.5 * .5;
console.log(quotient);

// Remainder using %
var remainder;
remainder = 11 % 3;

// Adding value to the variable and assigning the sum as the answer.
a += 12;
b += 9;

// Subtracting value to the variable and assigning the difference as the answer.
a -= 12;
b -= 9;

// The same can be done with multiplication
a *= 5;
b *= 10;

// The same can be done with division
a /= 6;
b /= 10;

// Strings
var myFirstName = 'Micah';
var myLastName = 'Fischer';

// Double quotes in strings
var myQuote = "This is \"not the best idea\" ";
// A backslash to \ continue the string.
console.log(myQuote);

// or start with single quotes.
var myQuote = 'This is "not the best idea" ';

// or use back ticks to include both single and double quotes.
var myQuote = `'This is "not the best idea"'`;

// Combine strings
var myStr = 'This is the start' + 'This is the end';

var ourStr = 'I come first.';
ourStr += 'I come second';

// Combine strings with variables
var myName = 'Micah';
var myIntro = 'Hello, my name is' + myName + ', how are you?'

var anAdjective = 'worthwhile';
var myStr = 'Learning to code'