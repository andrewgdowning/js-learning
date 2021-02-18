/* Interacting with the browser */

// You can interact with the console or browser 
console.log("Hello in the console");
// An alert popup
// alert("Woah");
// Prompt for input
// prompt("Enter text here");

/* Javascript basics */ 

/* Variables */
// Variables store values which can be retrieved later
// Create variables using let
let age = 29;
let name = "Andrew";
// We can then use this value e.g. print it to the console
console.log(name,age)
// Variables can be updated
age = 30;
// When we log age it will now show the updated age
console.log(age)
// Variables can also be stored in var but let is preferred and newer
var weather = "sunny"

/* Constant variables */
// Constants are immutable and cannot be changed or updated
// It is best practice to use const before using let
// Const is used when we know values will never change e.g. weekday names
const skyColor = "blue"

// There are several reserved variable names that cannot be used