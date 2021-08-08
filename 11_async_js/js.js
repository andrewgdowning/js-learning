// Hypothetical example
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback network function fired')
},2000) // This is async so it doesn't block the code it is added back to the bottom of the code execution thread

console.log(3);
console.log(4);

/* HTTP requests */
// we can use http requests to obtain data from another external source across a network
// http call can be made to an API endpoint
// requests are typically passed back in JSON format
// we can use the JSON placeholder testing API

// XHR HTTP requests
const request = new XMLHttpRequest(); // set up the request 

// a ready state event listener can be added to determine the state of requests at each stage
// states are defined here https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
/*
Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/
// status also needs to be checked to make sure API calls are successful 
// status codes -> http response codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const getTodos = (resource, callback) => {
    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200){ // we know 4 is done with the request
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Error with request', undefined)
        }
    });
    
    request.open('GET', resource); // open a request and define where it will be made
    request.send(); // send the request
}

// to prevent repeating this code we can make requests stored inside a function as shown above
// the API call is then made non-blocking by using a callback function to make the code execution async
// we can demonstrate the async call below with the console log steps being logged before the callback returns the data or the error

console.log(1);
console.log(2);
getTodos('https://jsonplaceholder.typicode.com/todos/', (err,data) => { // here we call the getTodos function passing in a callback
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});
console.log(3);
console.log(4);

/* handling JSON strings */
// APIs usually return request data in JSON format as a string
// in order to make this usable in JS we often want to convert this to an array
// we can parse the JSON

getTodos('https://jsonplaceholder.typicode.com/todos/', (err,data) => { // here we call the getTodos function passing in a callback
    if (err) {
        console.log(err)
    } else {
        data.forEach(item => {
            console.log(`User ${item.userId} posted ${item.title}`)
        });
    }
});

// Using this method, getting data from multiple sources becomes problematic
// it would take nesting callbacks and this can leade to 'callback hell'
// to get data from multiple sources sequentially we can use promises

/* Promises */
// First we construct a new function which will contain our network request much like our previous todosExample
// here we call our network request function 'getSomething'
const getSomething = () => { 

    return new Promise((resolve, reject) => { // A promise is something that is going to take some time to do
        // a promise takes in an arrow function as a param with two built in functions as part of the promise API
        // promises get a result with an outcome. The two outcomes are resolve or reject
        /* this is where we make the network request */
        //resolve('some data'); // this is where we would usually have the data but for now we are using dummy data
        reject('some error') // if fails
    });

};

// this returns a promise with resolve or reject returned
// a promise basically says at some point I am going to resolve or reject
// we can add on a .then() method which takes the data when the promise resolves
getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err); // we use a second callback function to handle rejection
}); 

// this can be made cleaner. Instead of nesting another afn inside, we can use .catch
getSomething().then(data => {
    console.log(data);
}).catch(err => { // catch is chained to handle any errors with reject
    console.log(err);
});

// This can then be applied to the original example but using promises instead of callbacks

const getTodosPromise = (resource) => {
    return new Promise((resolve,reject) => { // the new promise is added and encapsulates the request below, we pass in resolve and reject
        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200){ // we know 4 is done with the request
                const data = JSON.parse(request.responseText);
                resolve(data); // instead of the callback we resolve
            } else if (request.readyState === 4) {
                reject('error getting resource'); // instead of the call back we reject
            }
        });
        
        request.open('GET', resource); 
        request.send(); 
    });
};

getTodosPromise('https://jsonplaceholder.typicode.com/todos/').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// The advantage of using promises is we can chain them to perform async tasks one after another
// to chain promises, we make the first promise 'then' resolve return another promise but accessing a new resource
// .then can then be chained 
getTodosPromise('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    console.log(data, 'promise 1 resolved');
    return getTodos('https://jsonplaceholder.typicode.com/todos/2'); // we return a new promise with a diff resource
}).then((data) => {
    console.log(data, 'promise 2 resolved');
}).catch((err) => {
    console.log(err);
});

/* fetch API */
// a newer way to make network requests which incorporates promises 
// less code is required 
// fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log('resolved with fetch', response.json())
}).catch((err) => {
    console.log('rejected with fetch', err)
});
// fetch catch error handling works differently... it will only identify errors on network request