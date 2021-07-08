// DOM Document object model
// We can interact wth elements in a web page through accessing the DOM
// The document.querySelector allows us to access elements and store the element and its content in a variable

// We access and store the heading h1 tag as the 'heading' variable
let heading = document.querySelector('h1'); // This will only select the first h1 tag
console.log(heading) // logs <h1>Hello</h1>

// We can also use querySelectorAll to select all tags
let para = document.querySelectorAll('p')
// This will be stored as a node list which is like an array
console.log(para[1])
// Logs para 2

// The following method retrieves elements as a HTMLCollection. This is different to a node list and an array.
let names = document.getElementsByClassName('name')

/*
Node List Methods
.item(), .entries(), .forEach(), .keys(), .values()

HTML List Methods
.item(), namedItem()
*/

// Elements can be accessed by their ID or class
let errorID = document.querySelector('#error')
console.log(errorID) // <p id="error">Para 4</p>
let nameClass = document.querySelector('.name')
console.log(nameClass)

// Elements can be updated by updating properties
errorID.textContent = 'ERROR' // changes the text in the para to ERROR

// Entire HTML can be passed in
errorID.innerHTML = '<b>ERROR</b>'

// When passing in data we can use loops to add several rows of HTML content
const people = ['Andrew','Ellie','Matt','Lauren']
let peopleList = document.querySelector('ol')
people.forEach(person => {
    peopleList.innerHTML += `<li>${person}</li>`
}); // makes an li elent inside an ordered list for each person

// Any attribute of a html tag can also be updated
// This can be used to update css classes etc
console.log(nameClass.getAttribute('class')) // the current class name is name
nameClass.setAttribute('class','red') // we can change this to red

link = document.querySelector('#linkpara > a') // select the a tag in the linkpara id
link.setAttribute('href','http://yahoo.com') // link href attribute updated to yahoo from google

/* Adding and removing classes */
errorPara = document.querySelector('#error')
console.log(errorPara.classList)
errorPara.classList.add('red') // Adds red to the error p
errorPara.classList.remove('red') // removes

// Challenge to cycle through paras and if contain success or error then color
let allParas = document.querySelectorAll('p')

// colors red or green based on the text in the p element
allParas.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('red');
    } else if (para.textContent.includes('success')) {
        para.classList.add('green');
    } else {
        console.log('no match');
    }
});

// Parents, children, sibligns
// The DOM is structured as a tree. Elements have child elements all elements within one parent element are siblings
// We can traverse the DOM tree
let article = document.querySelector('article');
console.log(article.children) // HTML collection, we cannot use forEach on a HTML collection
// We can convert HTML collection into an array
console.log(Array.from(article.children));
// we can add a class to all all children
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});
// We can traverse up to a parent
let title = document.querySelector('h2');
console.log(title.parentElement); // get the parent element
console.log(title.nextElementSibling); // get the next sibling
console.log(title.previousElementSibling); // get the previous sibling

// we can chain this
console.log(title.nextElementSibling.parentElement.children) // traversing

/* Event basics */
// to make interactive elements we add an event listener
// the first param of an event listener is the event type and the second is a callback function
title.addEventListener('click',() => {
    alert('click click!')
}) // will create an alert on click
// We can attach event listeners in a loop
Array.from(title.children).forEach(child => {
    addEventListener('click',() => {
        child.remove
    })
});

// We can determine what was clicked using the event target
// Here we add the article and all of it's children into a variable
let articleContents = document.querySelector('article')
console.log(articleContents)
// adding an event listener for click, we can determine what was clicked by using e.target. e is the event
// e has many properties such as the position clicked, what was clicked, whether it was a right or left click, etc. All can be accessed.
articleContents.addEventListener('click',e => {
    console.log(e)
    console.log(e.target) // logs the element that was clicked (the target property)
})

/* Challenge to create a to do list */
let list = document.querySelector('.list')
list.addEventListener('click', e => {
        e.target.remove()
});
let submit = document.querySelector('button')
submit.addEventListener('click', (e) => {
    input = prompt()
    list.innerHTML += `<li>${input}</li>`
})
console.log(list)

// Adding a popup
let popupButton = document.querySelector('#popup-btn');
let popup = document.querySelector('#popup');

popupButton.addEventListener('click', (e) => {
    popup.classList.toggle('no-display')
})

popup.addEventListener('click', (e) => {
    popup.classList.toggle('no-display')
})