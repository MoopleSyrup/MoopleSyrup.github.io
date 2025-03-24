
document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const togglePasswordButton = document.getElementById("togglePassword");

    // Add an event listener to the "Show/Hide" button
    togglePasswordButton.addEventListener("click", function () {
        // Toggle the input type between 'password' and 'text'
        const currentType = passwordField.type;
        passwordField.type = currentType === "password" ? "text" : "password";

        // Toggle the button text between 'Show' and 'Hide'
        togglePasswordButton.textContent = passwordField.type === "password" ? "Show" : "Hide";
    });
});




