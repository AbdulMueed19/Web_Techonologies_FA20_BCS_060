 window.onload = function () {
    const form = document.getElementById("SignInForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");

/*
    form.addEventListener("submit", (event) => {

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Check if the email is valid
    if (!isValidEmail(emailValue)) {
    displayErrorMessage(emailInput, "Please enter a valid email address.");
    return;
}

    // Check if the password is valid
    if (!isValidPassword(passwordValue)) {
    displayErrorMessage(passwordInput, "Please enter a password with at least 8 characters.");
    return;
}

    // If the email and password are valid, submit the form
    form.submit();

    // Hide the form after it is submitted
    form.style.display = "none";
});

    function isValidEmail(email) {
    // Use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    function isValidPassword(password) {
    // Check that the password is at least 8 characters long
    return password.length >= 8;
}

    function displayErrorMessage(input, message) {
    // Remove any existing error message
    const error = input.parentNode.querySelector(".error");
    if (error) {
    error.remove();
}*/
/*

    // Create a new error message and add it to the DOM
    const errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    input.parentNode.appendChild(errorMessage);
}
*/

}
 function showForm() {
     const form = document.getElementById("SignInForm");
     if (form.style.display === "none") {
         form.style.display = "block";
     } else {
         form.style.display = "none";
     }
 }
