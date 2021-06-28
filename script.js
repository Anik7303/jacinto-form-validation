const form = document.getElementById('form')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false
let passwordsMatch = false

function validateForm() {
    // using contraint api
    isValid = form.checkValidity()
    // style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return
    }
    // check to see if passwords match
    if (password.value === confirmPassword.value) {
        passwordsMatch = true
        password.style.borderColor = 'green'
        confirmPassword.style.borderColor = 'green'
    } else {
        passwordsMatch = false
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        password.style.borderColor = 'red'
        confirmPassword.style.borderColor = 'red'
        return
    }
    // if form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!'
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // Do something with user data
    console.log({ user })
}

function processFormData(evt) {
    evt.preventDefault()
    // validate form
    validateForm()
    // submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData()
    }
}

// event listeners
form.addEventListener('submit', processFormData)
