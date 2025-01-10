"use strict";

const signForm = document.querySelector(".sign-form");
const errorMessage = document.querySelector(".error-message");
const firstError = document.querySelector("#last-name-error");
const lastError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const errorIcons = document.querySelector(".error-icon");

// validating the input
signForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // save the input
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const emailAddress = document.getElementById("email-address").value;
  const password = document.getElementById("password").value;

  let valid = true;

  // Reset error messages and icons
  firstError.style.display = "none";
  secondError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  errorIcons.forEach((icon) => {
    icon.style.display = "none";
  });

  // Validate first name
  if (firstName.length < 3) {
    firstError.style.display = "block";
    document.querySelector("#first-name + .error-icon").style.display = "block";
    valid = false;
  }

  // Validate last name
  if (lastName.length < 3) {
    lastError.style.display = "block";
    document.querySelector("#last-name + .error-icon").style.display = "block";
    valid = false;
  }

  // Validate email address
  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(emailAddress)) {
    emailError.style.display = "block";
    document.querySelector("#email-address + .error-icon").style.display =
      "block";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.style.display = "block";
    document.querySelector("#password + .error-icon").style.display = "block";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully");
  }
});
