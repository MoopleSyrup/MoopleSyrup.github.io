document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password");
    const togglePasswordButton = document.getElementById("togglePassword");

    togglePasswordButton.addEventListener("click", function() {
        const currentType = passwordField.type;
        if (currentType === "password") {
            passwordField.type = "text"; // Show the password
            passwordField.classList.add("shown"); // Add class to change style
            togglePasswordButton.textContent = "Hide"; // Change button text
        } else {
            passwordField.type = "password"; // Hide the password
            passwordField.classList.remove("shown"); // Remove style changes
            togglePasswordButton.textContent = "Show"; // Change button text
        }
        form.classList.add("s--processing");
                loadingIndicator.classList.add("form__text--step-0");

                // Simulate a delay for loading animation
                setTimeout(function() {
                    form.classList.remove("s--processing");
                    loadingIndicator.classList.remove("form__text--step-0");
                }, 2000);
    });
});