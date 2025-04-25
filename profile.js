document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profileForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const abstract = document.getElementById("abstract").value;
        const status = document.getElementById("status").value;

        const profileData = {
            username: username,
            password: btoa(password), // Simple encoding for demonstration
            abstract: abstract,
            status: status
        };

        // Simulate saving to a server or local storage
        console.log("Profile saved:", profileData);
        alert(`Profile saved successfully! Welcome, ${username}. Your status is: ${status}.`);
    });
});
