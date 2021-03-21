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

/* Template literals */
// When adding strings to variables then template literals can be used
// Ths is useful for wokring with html
const title = "Best reads of 2019";
const author = "Andrew"
const like = 30
let header = `The blog ${title} by ${author} has ${like} likes`
console.log(header)
let html = `<h1>${title}</h1>`
console.log(html)

/* Numbers */
// In 
let radius = 10; // set a radius variable
const pi = 3.14; // pi will always remain the same

// Math operators +,-,*,/,**,%
console.log(10+10) // addition result 20
console.log(3-1) // 2
console.log(2*2) // 4
console.log(6/3) // 2
console.log(2**3) // 8
console.log(7%3) // Modulo means the remainder 3 goes into 7 twice remainder 1

// Order of operations = BIDMAS

// Other operators when using variables
let likes = 10;
// We can increment by 1 in shorthand by using ++
likes++
console.log(likes) // 11
// This works for substraction also
likes--
console.log(likes) // 10
// When using operators on a variable the shorthand (operation)= can be used
// e.g. += , -=, /=, *=
likes+=20
console.log(likes) // 30

/* Nan */
// Nan = not a number e.g. trying to multiply a string to by integer
console.log(5 * 'hello');

/* Arrays */
// Arrays store a collection of data
let films = ["Harry Potter", "Star Wars", "Lord of the Rings"]
console.log(films)
// Retrieving items in an array
console.log(films[0]) // Harry Potter
// Overriding positions in an array
films[1] = "I am your father"
console.log(films[1])

/* Array properties and methods */
