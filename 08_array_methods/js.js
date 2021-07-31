/* Array methods */
// Array methods allow us to cycle through an array and perform an action on the array items

/* Filter method */
// Allows use to filter and reduce the items in an array based on a criteria
// the filter will check each item and if that check is true it will keep the item in the array
// if it doesn't pass it will remove the item from the array
const scores = [10,20,30,20,30,20,50,80,20,30]
// When using the filter method, we pass in a call back function
// the callback function must return a true or a false to evaluate inclusion of the item
// the filter method is non-destructive meaning that it will not update or modify the original array
// therefore we often assign to a new variable
let scoresFiltered = scores.filter((score) => {
    return score > 50;
})
console.log(scoresFiltered) // returns only 80

//Another example
users = [
    {name: 'Andrew', premium: true},
    {name: 'Ellie', premium: true},
    {name: 'Lauren', premium: false}
]
let premiumUsers = users.filter((user) => user.premium)
console.log(premiumUsers) // logs Andrew and Ellie

/* Map method */
// Takes an array and maps it into a new array. 
// It tranforms the original items using a function and adds the result to the new array
const prices = [10,22,31,23,23,44,57]
let pricesVAT = prices.map((price) => {
    return price * 1.2
})
console.log(pricesVAT) // marks up the price by 20%

// Example with objects in an array
const products = [
    {name: 'lego', price: 20},
    {name: 'mechano', price: 24},
    {name: 'kennex', price: 26},
    {name: 'build', price: 28},
]
let saleProducts = products.map((product) => {
    if (product.price < 25) {
        return {name: product.name, price: product.price / 2}
    } else {
        return product
    }
})
console.log(saleProducts) // returns 50% off for products under 25 in a new array
// !!! map can be destructive if we reference the original array item e.g. return product.price = product.price / 2

/* Reduce method */
// Returns any value that you want based on some criteria on the original array e.g. we can count the number of scores based on a criteria
let result = scores.reduce((acc, curr) => {
    if (curr > 50){
        acc++;
    }
    return acc;
}, 0);// We set the accumulated total (acc) to zero here
console.log(result)

/* Find method */
// The find method returns the value of the first array item that passes a condition
let firstHighScore = scores.find((score) => {
    return score > 50;
})
console.log(firstHighScore) // Returns 80

/* Sort method */
// The sort method can rearrange the order of an array
// Sort directly alters the original array. It is destructive or mutates the original array
const names = ['Andrew','Ellie','Karen','Mick','Lauren'];
names.sort();
console.log(names)
names.reverse(); // We can use reverse also to flip the order
console.log(names);

/* Array method chaining */

let promotions = products
    .filter(product => product.price < 50)
    .map(product => {
        return {name: product.name, price: product.price / 2}
    })
console.log(promotions);