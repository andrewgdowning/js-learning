// When a user clicks a submit event in a form it triggers a submit event
let form = document.querySelector('.signup-form');
let validation = /[a-z]{6,}/;
// Event listeners shouldn't be attached to the submit button for forms as we want to capture all of the form content
// The default action of a submit event is to refresh the page so we must prevent this for this example
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    // to access form values we can use .notation to access the class and value
    console.log(form.username.value)
    // We usually want to add some form of validation. REGEX is used for this.
    if (validation.test(form.password.value)) {
        console.log('PASSED') // This will print passed where true (6 chars or over)
    } else {
        console.log('FAILED')
    }

})

// Regex can be used for validation 
let pword = 'teord'
// We define the regex pattern as a variable
let passwordValidation = /[a-z]{6,}/;
// And can use the .test() function to test based on that pattern match returning true or false
let passwordResult = passwordValidation.test(pword)
console.log(passwordResult) // Returns true if legnth is 6 or more
