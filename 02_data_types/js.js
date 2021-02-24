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

/* More string methods */
let email = "example@example.com"
// Find the index position of the last c
console.log(email.lastIndexOf("c")); // 16
// Find a string between two characters
console.log(email.slice(2,5)); // amp
// Get a substring of a certain length
console.log(email.substr(2,5)) // Start at index 2 and get 5 chars 'ample'
// Replace specific characters
console.log(email.replace("n","w")) // replaces the first n for w
// The replace method can be used with regex for pattern matching

/* Numbers */
// In 
let radius = 10; // set a radius variable
const pi = 3.14; // pi will always remain the same

// Math operators +,-,*,/,**,%
console.log(10+10) // addition result 20
console.log(3-1) // 2
console.log()
console.log()
console.log()
console.log()
