/* async functions */
// any function can be made async to make it non-blocking
// async functions always return a promise
const getData = async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;

};

console.log(1);
console.log(2);
const test = getData()
// as the async function returns a promise we need to use .then() to handle the resolve
.then(data => console.log(data))
.catch(err => console.log(err.message))
console.log(3);
console.log(4);

// we can see that the async function is now non-blocking as 1,2,3,4 are logged first