window.onload = function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      let isValid = true;

      // First Name validation
      let name = document.getElementById("name").value.trim();
      let nameError = document.getElementById("nameError");
      if (name.length < 3) {
          nameError.textContent = "First name must be at least 3 characters.";
          isValid = false;
      } else {
          nameError.textContent = "";
      }

      // Last Name validation
      let lastName = document.getElementById("lastName").value.trim();
      let lastNameError = document.getElementById("lastNameError");
      if (lastName.length < 3) {
          lastNameError.textContent = "Last name must be at least 3 characters.";
          isValid = false;
      } else {
          lastNameError.textContent = "";
      }

      // Email validation
      let email = document.getElementById("email").value.trim();
      let emailError = document.getElementById("emailError");
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          emailError.textContent = "Enter a valid email.";
          isValid = false;
      } else {
          emailError.textContent = "";
      }

      // Password validation
      let password = document.getElementById("password").value;
      let passwordError = document.getElementById("passwordError");
      if (password.length < 6) {
          passwordError.textContent = "Password must be at least 6 characters.";
          isValid = false;
      } else {
          passwordError.textContent = "";
      }

      // Confirm Password validation
      let confirmPassword = document.getElementById("confirmPassword").value;
      let confirmPasswordError = document.getElementById("confirmPasswordError");
      if (confirmPassword !== password) {
          confirmPasswordError.textContent = "Passwords do not match.";
          isValid = false;
      } else {
          confirmPasswordError.textContent = "";
      }

      // Check if the form is valid before submitting
      if (isValid) {
          alert("Form submitted successfully!");
          document.getElementById("myForm").reset(); // Reset form after submission
      }
  });
};


let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function updateSlides() {
    let prev = (index - 1 + slides.length) % slides.length;
    let next = (index + 1) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove("active", "left", "right");
        if (i === index) slide.classList.add("active");
        else if (i === prev) slide.classList.add("left");
        else if (i === next) slide.classList.add("right");
    });

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlides();
}

function goToSlide(n) {
    index = n;
    updateSlides();
}

// Auto Slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize
updateSlides();
