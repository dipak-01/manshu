document.addEventListener("DOMContentLoaded", () => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
        alert("You are already logged in.");
        window.location.href = "/Webakriti/participant-form.html"; // Correct URL to participant form page
        return; // Prevent further script execution
    }

    // Handle Login Form Submission
    const loginForm = document.querySelector("#login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const email = document.querySelector("#login-email").value;
            const password = document.querySelector("#login-password").value;

            const userInfo = { email, password };

            try {
                const response = await axios.post("http://localhost:4001/user/login", userInfo);
                alert("Logged in successfully");
                localStorage.setItem("Users", JSON.stringify(response.data.user));
                window.location.href = "/Webakriti/participant-form.html"; // Correct URL to participant form page
            } catch (err) {
                if (err.response) {
                    const errorMessage = err.response.data.message || "Incorrect username or password.";
                    alert("Login Error: " + errorMessage);
                } else {
                    console.error("Error:", err);
                    alert("A network error occurred. Please try again later.");
                }
            }
        });
    }
});
