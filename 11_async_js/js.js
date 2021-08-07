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

const getTodos = (callback) => {
    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200){ // we know 4 is done with the request
            callback(undefined, request.responseText)
        } else if (request.readyState === 4) {
            callback('Error with request', undefined)
        }
    });
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/'); // open a request and define where it will be made
    request.send(); // send the request
}

// to prevent repeating this code we can make requests stored inside a function as shown above
// the API call is then made non-blocking by using a callback function to make the code execution async
// we can demonstrate the async call below with the console log steps being logged before the callback returns the data or the error

console.log(1);
console.log(2);
getTodos((err,data) => { // here we call the getTodos function passing in a callback
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

getTodos((err,data) => { // here we call the getTodos function passing in a callback
    if (err) {
        console.log(err)
    } else {
        const dataArray = JSON.parse(data)
        dataArray.forEach(data => {
            console.log(`User ${data.userId} posted ${data.title}`)
        });
    }
});
