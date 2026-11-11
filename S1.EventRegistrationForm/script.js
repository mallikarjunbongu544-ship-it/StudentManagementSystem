
document.getElementById("registrationForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(function(error) {
        error.innerHTML = "";
    });

    document.getElementById("success").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML =
        "Please enter your name";
        valid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
        "Enter a valid email address";
        valid = false;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML =
        "Enter a valid 10-digit phone number";
        valid = false;
    }

    // Gender validation
    if (gender === "") {
        document.getElementById("genderError").innerHTML =
        "Please select gender";
        valid = false;
    }

    // College validation
    if (college === "") {
        document.getElementById("collegeError").innerHTML =
        "Please enter college name";
        valid = false;
    }

    // Department validation
    if (department === "") {
        document.getElementById("departmentError").innerHTML =
        "Please select department";
        valid = false;
    }

    // Year validation
    if (year === "") {
        document.getElementById("yearError").innerHTML =
        "Please select year";
        valid = false;
    }

    // Event validation
    if (event === "") {
        document.getElementById("eventError").innerHTML =
        "Please select an event";
        valid = false;
    }

    // Display success message
    if (valid) {
        document.getElementById("success").innerHTML =
        "<h3>Registration Successful!</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone: " + phone + "</p>" +
        "<p>Gender: " + gender + "</p>" +
        "<p>College: " + college + "</p>" +
        "<p>Department: " + department + "</p>" +
        "<p>Year: " + year + "</p>" +
        "<p>Event: " + event + "</p>";
    }

});

// Reset form and messages
document.getElementById("registrationForm")
.addEventListener("reset", function() {

    document.querySelectorAll(".error").forEach(function(error) {
        error.innerHTML = "";
    });

    document.getElementById("success").innerHTML = "";

});