// Browsers provide local storage as part of the window object
// to save an item into local storage we use setItem() method on localStorage
// localStorage is a window object property
localStorage.setItem('name','andrew')


// to get an item
console.log(localStorage.getItem('name')) 
console.log(localStorage.name) // or use . notation

// to update an item
localStorage.setItem('name','ellie')
console.log(localStorage.name)

// to delete an item
localStorage.removeItem('name')
console.log(localStorage) // now empty

// local storage can also be completely cleared
localStorage.clear()

// everything stored in local storage is a string
// we may have to convet ohter objects into a string
// and then convert back when we retrieve it

const todos = [
    {text: 'send an email', author: 'andrew'},
    {text: 'hoover the flat', author: 'ellie'},
    {text: 'learn to code', author: 'ellie'}
]
//
localStorage.setItem('todos',JSON.stringify(todos))

JSON.parse(localStorage.todos)