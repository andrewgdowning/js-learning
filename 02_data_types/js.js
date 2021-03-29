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
let resultOne = films.join("-") // Joins the items in the array into one string separated by -
console.log(resultOne) 
let resultTwo = films.indexOf("Star Wars") // Finds the index 1
console.log(resultTwo)
let resultThree = films.concat(["Marvel Films","Friends"]); // Concatenates only in the new variable (non destructive)
console.log(resultThree); // This has the new films concatenated
console.log(films); // The original variable is unchanges
let resultFour = films.push("Big Brother"); // This is a destructive method as it modified the original vale
console.log(resultFour); // This outputs the size of the new list, in this case 4
console.log(films); // the original variable has been changed to contain 4
let resultFive = films.pop("Big Brother"); // This is also a destructive method and will modify the original variable
console.log(resultFive); // 3
console.log(films); // the original variable has been modified and big brother removed

/* Null and Undefined */
// Null is an intentional lack of value
// Undefined is unintentional
let age 
console.log(age, age + 3, `the age is ${age}`);
// The three results will be as follows
// Undefined as the variable hasn't been set and has no type
// NaN as we are tyring to add to an undefined type
// 'The age is undefined' will be logged
let years = null
console.log(years, years + 3, `the age is ${years}`);
// The three results will be as follows
// null as the variable has been set up but with no value. It has been left empty
// 3
// 'The age is null' will be logged

/* Booleans */
// Represent true and false
console.log(true,false)
// This is not the same as 
console.log("true","false")
// As this will be interpreted as a string
// Booleans are used for evaluation
let userEmail = 'email@email.com'
let emailCheck = email.includes('@') // This will return a boolean
console.log(emailCheck)
// Comparison operators
let userAge = 29;
console.log(age == 29); // True - When using comparison operators this will log true or false
console.log(age == 30); // False
console.log(age != 30); // True - this is not equal
console.log(age != 29); // False
console.log(age > 20); // True - greater than
console.log(age < 20); // False - less than
console.log(age <= 29); // True - greater than or equal to
console.log(age >= 29); // True - less than or equal to

let userName = "Andrew"
console.log(userName == "Andrew") // True
console.log(userName == "andrew") // True
console.log(userName == "Ellie") // False
// == is known as abstract or loose equality i.e. we aren't checking the type
console.log(1 == '1') // True even though they are different types
console.log(1 === '1') // False as here we are checking the string type

/* Type conversion */
// Turning one data type into another
let score = '100';
// Convert string to number
score = Number(score)
console.log(score + 20); 
console.log(typeof score) // You can check the type using typeof
// Conver to string
let test = 200;
test = String(test);
console.log(typeof test)
// Booleans can also be represented by numbers 0 = false +ve = true
let truthy = Boolean(1)
console.log(truthy)
let falsy = Boolean(0)
console.log(falsy)

