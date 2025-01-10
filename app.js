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
    valid = false;
    firstError.style.display = "block";
    document.querySelector(".error-icon").style.display = "block";
  }

  // Validate last name
  if (lastName.length < 3) {
    valid = false;
    lastError.style.display = "block";
    document.querySelector(".error-icon").style.display = "block";
  }

  // Validate email address
  const emailPattern = /^([\w.-]{2,}@[a-z0-9]{2,}\.[a-z0-9]{2,})/i;
  // example_123@gmail.com
  if (!emailPattern.test(emailAddress)) {
    valid = false;
    emailError.style.display = "block";
    document.querySelector(".error-icon").style.display = "block";
  }

  // Validate password
  const validatePassword = function (password) {
    //check if it contain 6 characters
    const lengthPattern = /\S{6,}/;
    // check if it contains numbers
    const digitPattern = /\d/;
    // return
    return lengthPattern.test(password) && digitPattern.test(password);
  };
  if (!validatePassword(password)) {
    valid = false;
    passwordError.style.display = "block";
    document.querySelector(".error-icon").style.display = "block";
  }

  if (valid) {
    alert("Form submitted successfully");
  }
});
