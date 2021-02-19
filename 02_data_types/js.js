/* Strings */
// Store letters or other characters
// The syntax requires single or double quotes
let myString = "Hello world"
console.log(myString)

// Strings can be joined together using concatenation
// + will concatenate strings together in JS
let firstName = "Andrew"
let surname = "Downing"
let fullName = firstName + " " + surname
console.log(fullName)

/* String properties and methods */
// Get characters in a string by accessing like an array
// Javascript is a zero-based language for example string[0] accesses the 1st character
console.log(firstName[2]) // d
// String length
console.log(firstName.length)
// Functions perform an action based on input when called, methods are functions that belong to an object
// Note using dot notation e.g. .propertyName will call an object property
// using dot notation with parentheses e.g. .methodName() will call a method 
// Other string methods
console.log(fullName.toUpperCase()) // ANDREW DOWNING
console.log(fullName.indexOf("D")) // 7 this finds the index location of "D"

