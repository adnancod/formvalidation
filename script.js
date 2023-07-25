const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Form submission code here
        alert('Form submitted successfully!');
    }
});

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    clearErrorMessages();

    // Validate name
    if (nameInput.value.trim() === '') {
        displayErrorMessage('nameError', 'Name is required.');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        displayErrorMessage('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        displayErrorMessage('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    // Validate confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
        displayErrorMessage('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    return isValid;
}

function displayErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => {
        element.textContent = '';
    });
}
