/* Funcitons */
// DRY - don't repeat yourself
// Functions are reusable code blocks that allow you to call an repeatable
// action without rewriting the code

// Function DECLARATION
function greet() {
    console.log("Hello there");
}
// Calling a function
greet()
// Logs hello there to the terminal

// Function EXPRESSION is attaching a function to a variable
const speak = function() {
    console.log('Good day!')
}
// Calling the function expression
speak()

/* HOISTING 
Javascript hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
Function declarations ARE hoisted...
This means that they can be called even if the function is defined after the call
Function expression ARE NOT hoisted...
Use function expressions to keep code simpler
*/

// Using variables in functions (arguments)
// Data can be passed into functions for use
// We can also define default values for arguments
const sayName = function(name = '... oh, I didnt get your name') {
    console.log(`Hello there ${name}`)
}
// Call and pass in a value
sayName('Andrew')
// Will print Hello there Andrew
sayName() 
// Prints the default value 'Hello there... oh I didn't get your name

// Returning values
// We can return values out of the function to be used elsewhere in the scope

const pythagoras = function(a, b, c) {
    let area = (a ** 2) + (b ** 2) + (c ** 2)
    return area
}
// Prints 14
console.log(`The area of a triangle with lengths 1, 2, 3 is ${pythagoras(1, 2, 3)} cm squared`)

/* Arrow functions */
// a shorter way to write a function
const arrowOne = (paramOne, paramTwo) => {
    console.log('do something')
    return paramOne
}
// If we have exactly one param, parenthesis aren't required
const arrowTwo = params => {
    console.log('do something')
}
// Parenthesis are required if there are no params
const arrowThree = () => {
    console.log('do something')
}
// If we have a single return we can shorten further without brackets
const arrowFour = value => value * 2

/* Functions vs Methods */
const firstName = 'Andrew';
// methods 
// are a function that performs and action on an object
// methods are invoked using dot '.' notation
// for example the text object has a method of toUpperCase()
console.log(firstName.toUpperCase())
// Prints ANDREW

/* Callback functions */
// When passing a function into another function as a param this is a call back function
let myFuncOne = function (callBackFuncOne) {
    let value = 50;
    callBackFuncOne(value);
};
// We can then call and run myFunc and pass in the callback function as follows
myFuncOne(function(value) {
    console.log(value)
})
/* This runs as follows
1. Runs the myFuncOne function and defines a value of 50
2. It then reaches the call back function and runs the console.log
*/

// This is usually written as arrow functions
const myFuncTwo = (callBackFuncTwo) => {
    let value = 60;
    callBackFuncTwo(value)
}
// we call the original function and pass in the callback function
myFuncTwo((value) => {
    console.log(value * 2)
})
// Prints 120

/* For each */
// An example is a for each method which executes a function for each item in an array
let cousins = ['Andrew', 'Ryan', 'Thomas']
// We are passing in a function that logs to the console into the method that iterates over each item in the array
cousins.forEach(cousin => {
    console.log(cousin)
});
