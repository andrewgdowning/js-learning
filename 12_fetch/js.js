/* fetch API */
// a newer way to make network requests which incorporates promises 
// less code is required 
// fetch returns a promise
// first we set up the fetch call with the resource as the param, fetch returns a promise so we can immediately use .then() to handle the resolve
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    return response.json(); 
}).then(data => {
    console.log('Data with fetch', data.title);
}).catch(err => {
    console.log('rejected', err);
});

/*
Fetch responses are passed back as a specific response object e.g.
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/todos/1", redirected: false, status: 200, ok: true, …}
body: ReadableStream
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://jsonplaceholder.typicode.com/todos/1"

To access the data we can use one of the methods of the response object -> .json()
It is best to use promise chaining. In the initial resolve from the promise .then() we can return the response.json()
This allows us to pass to another .then() resolve code block that then performs actions on the data

Error handling
The way the fetch API works with error handling, is that the catch will only be triggered on a network error
This can be when the API is offline etc
If we mistype the url then we won't get an error, we will still get a response so then will still be triggered
The response will give us a status code e.g. 400 if we don't get an appropriate response
We need to build error handling into the .then() resolve section using status codes
*/