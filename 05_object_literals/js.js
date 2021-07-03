/* Objects 
Objects have properties and methods
Properties store information about the instance of that object
Methods are things that the object can do
*/

// objects are defined with {}
// object properties are stored in key value pairs e.g. name: 'Andrew'.
let user = {
    name:'Andrew Downing',
    age: 30,
    email: 'test@testest.test',
    location: 'berlin',
    blogPosts: ['what to do today', 'what I did yesterday'],
    password: { // Objects can contain other objects a properties
        length: 10,
        value: 'xyz123'
    }
}

// We can access properties of an object as follows
console.log(user) // this will log the full object
console.log(user['name']) // we can access the value of a specific key by using ['keyName']
console.log(user.name) // or alternatively use . notation.
console.log(user.age)
console.log(user.blogPosts[1]) // Accessing an item in an array in an object property
console.log(user.password['length']) // returns 10 by accessing a object property within the object.

// Updating an object
user.age += 1 // adding 1 to the age
console.log(user.age) // Now updated to 31

// Objects can also have methods, action that they perform.
let phone = {
    type: 'iPhone',
    number: 1234,
    call() { // We use regular functions here as we can't use 'this' with arrow functions
        console.log(`calling ${this.number}`) // 'this' allows us to access the object scope and retrieve a property from this object
    }
}
// using the object method
phone.call()
// logs 'calling 1234'

// When working with data it is common to see objects in arrays
let blogs = [
    {title: 'Welcome to my site', likes: 10},
    {title: 'What to do with your weekend', likes: 11},
    {title: 'The top 10 books', likes: 12}
];

// Prints each title and the number of likes
blogs.forEach(blog => {
    console.log(`The blog titled ${blog.title} has ${blog.likes} likes.`)
});

// Another common default object is the math object.
// It has properties and arrays that can be access to perform math operaitons
console.log(Math.PI) // logs Pi
console.log(Math.floor(7.2)) // 7
console.log(Math.round(7.3)) // 7

// Random number generation
let randomNumber = Math.random() // Random number between 0 and 1
console.log(randomNumber)

