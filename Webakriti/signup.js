document.addEventListener("DOMContentLoaded", () => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
        alert("You are already logged in.");
        window.location.href = "/Webakriti/rules.html"; // Redirect to rules page
        return; // Prevent further script execution
    }

    // Handle Sign-Up Form Submission
    const signupForm = document.querySelector("#signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const fullname = document.querySelector("#signup-name").value;
            const email = document.querySelector("#signup-email").value;
            const password = document.querySelector("#signup-password").value;

            const userInfo = { fullname, email, password };

            try {
                const response = await axios.post("http://localhost:4001/user/signup", userInfo);
                alert("Signup successful");
                localStorage.setItem("Users", JSON.stringify(response.data.user));
                window.location.href = "/Webakriti/rules.html"; // Redirect after signup
            } catch (err) {
                if (err.response) {
                    const errorMessage = err.response.data.message || "An unknown error occurred.";
                    alert("Signup Error: " + errorMessage);
                } else {
                    console.error("Error:", err);
                    alert("A network error occurred. Please try again later.");
                }
            }
        });
    }
});
