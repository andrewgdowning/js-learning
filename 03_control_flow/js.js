// Control flow
/* Use of conditional statements or loops */
// For loops
// A for loop allows the execution of a code block for a certain condition
// let i = 0; initiatives a variable as 0
// i < 5 is the condition. While i is less than 5 the code will run
// i++ adds 1 to i each time the code block is run
for (let i = 0; i < 5; i++) {
    console.log(i)    
}
// this prints 0, 1, 2, 3, 4 to the console separately

// It is common to work with data in loops iterating over each item
let names = ['Andrew', 'Ellie', 'Lauren']
// we can set up a loop to cycle through the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// this will print Andrew, Ellie, Lauren separately to the console
// the same can be achieved with a forEach method on an array using an arrow function
names.forEach(name => {
    console.log(name)
});

// another example with html output
names.forEach(name => {
    console.log(`<div>${name}</div>`)
});


// While loops 
// variables passed into conditional statements as part of while loops
// must be declared outside of the loop
let i = 0;
// the while loop only has the conditional statement
while (i < 5) {
    console.log(i)
    i++;
}
// example of a while loop using data
while (i < names.length) {
    console.log(names[i]);
    i++;
}

// do while loops
// check the condition last. This is useful when you want to run the code
// at least once even if the condition is met
let j = 17
do {
    console.log(j);
    i++
} while (j <= 5);

/* Control flow */

const age = 18

// if statements
// the code will execute if the condition is true
// else will execute if the condition is not met
if (age > 18) {
    console.log("You're old enough!")
} else if (age < 18) {
    console.log("You're too young!")
} else {
    console.log("You've just turned 18")
}

// Logical operators to combine conditionals
// && and
// || or

// ! is logical not e.g.
let user = true
if (!user) {
    console.log('test')
}
// will not log anthing to the console as it is evaluating if user is false
// in this case user is true

/* Break and continue */
// Can break out of a loop or skip an iteration
// E.g. if the top score is reached in a game, break out of the game loop

let scores = [10,20,30,40,50,60,70,80,90,100]
// The following will break the loop when 5 is hit
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 50) {
        console.log('MAX SCORE IS 50')
        break
    }
    console.log(`Score is ${scores[i]}`)
}
// Or we can skip and iteration by using continue
// Score 10 might be so low that we want to skip it...
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 10) {
        continue
    } else {
        console.log(`Score is ${scores[i]}`)
    }
}

/* Switch statements */
// Used when we want to evaluate many conditions
// Switch will run all of the cases after the match unless you break
let grade = 'A';
switch (grade) {
    case 'A':
        console.log('Top of the class!')
        break;
    case 'B':
        console.log('Good effort!')
        break;
    case 'C':
         console.log('You could improve')      
         break;     
    default:
        console.log('Not a valid grade')
        break;
}