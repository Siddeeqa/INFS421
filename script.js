// Preloader
window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};

// Profile Form Submission
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const abstract = document.getElementById("abstract").value;
    const status = document.getElementById("status").value;

    // Simulate saving profile data
    console.log("Profile saved:", { username, password, abstract, status });
    document.getElementById("profileMessage").textContent = "Profile saved successfully!";
});

// Appointment Form Submission
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const appointmentName = document.getElementById("name").value;
    const appointmentEmail = document.getElementById("email").value;
    const appointmentDay = document.getElementById("day").value;
    const appointmentTime = document.getElementById("time").value;

    // Simulate saving appointment data
    console.log("Appointment booked:", { appointmentName, appointmentEmail, appointmentDay, appointmentTime });
    document.getElementById("appointmentMessage").textContent = "Appointment booked successfully!";
});

// Submission Form Handling
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const researchTitle = document.getElementById("research_title").value;
    const abstract = document.getElementById("abstract").value;
    const keywords = document.getElementById("keywords").value;

    // Simulate saving submission data
    console.log("Submission received:", { name, email, researchTitle, abstract, keywords });
});
