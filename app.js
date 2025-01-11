"use strict";

const signForm = document.querySelector(".signup");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const errorIcons = document.querySelectorAll(".error-icon");

let valid;

// Define the function to handle form submission
function handleSubmit(e) {
  e.preventDefault(); // Prevent default form submission behavior
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  errorIcons.forEach((icon) => {
    icon.style.display = "none";
  });

  valid = true;

  // save the input
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const emailAddress = document.getElementById("email-address").value.trim();
  const password = document.getElementById("password").value.trim();

  // validating the input
  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmailAddress(emailAddress);
  validatepassword(password);

  if (valid) {
    // Submit the form or perform any other necessary actions
    console.log("Form submitted successfully!");
  }
}

// Attach the event listener to the form
signForm.addEventListener("submit", handleSubmit); // Validate first name

function validateFirstName(firstName) {
  if (firstName.length < 3) {
    firstNameError.style.display = "block";
    document.querySelector("#first-name + .error-icon").style.display = "block";
    valid = false;
  }
}

// Validate last name
function validateLastName(lastName) {
  if (lastName.length < 3) {
    lastNameError.style.display = "block";
    document.querySelector("#last-name + .error-icon").style.display = "block";
    valid = false;
  }
}

// Validate email
function validateEmailAddress(emailAddress) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailAddress)) {
    emailError.style.display = "block";
    document.querySelector("#email-address + .error-icon").style.display =
      "block";
    valid = false;
  }
}

// Validate password
function validatepassword(password) {
  if (password.length < 6) {
    passwordError.style.display = "block";
    document.querySelector("#password + .error-icon").style.display = "block";
    valid = false;
  }
}
