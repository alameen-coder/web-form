"use strict";

const signForm = document.querySelector(".signup");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const errorIcons = document.querySelectorAll(".error-icon");

// Define the function to handle form submission

// Attach the event listener to the form

function validateFirstName(firstName) {
  if (firstName.length < 3) {
    firstNameError.style.display = "block";
    document.querySelector("#first-name + .error-icon").style.display = "block";
    return false;
  }
  return true;
}

// Validate last name
function validateLastName(lastName) {
  if (lastName.length < 3) {
    lastNameError.style.display = "block";
    document.querySelector("#last-name + .error-icon").style.display = "block";
    return false;
  }
  return true;
}

// Validate email
function validateEmailAddress(emailAddress) {
  const emailPattern = /^([\w._]{2,}@[a-z0-9]{2,50}\.[a-z0-9]{2,50})/i;
  if (!emailPattern.test(emailAddress)) {
    emailError.style.display = "block";
    document.querySelector("#email-address + .error-icon").style.display =
      "block";
    return false;
  }
  return true;
}

// Validate password
function validatePassword(password) {
  if (password.length < 6) {
    passwordError.style.display = "block";
    document.querySelector("#password + .error-icon").style.display = "block";
    return false;
  }
  return true;
}

function handleSubmit(e) {
  e.preventDefault(); // Prevent default form submission behavior
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  errorIcons.forEach((icon) => {
    icon.style.display = "none";
  });

  let valid = true;

  // save the input
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const emailAddress = document.getElementById("email-address").value.trim();
  const password = document.getElementById("password").value.trim();

  // validating the input
  valid &= validateFirstName(firstName);
  valid &= validateLastName(lastName);
  valid &= validateEmailAddress(emailAddress);
  valid &= validatePassword(password);

  if (valid) {
    console.log("Form succefully completed");
    signForm.reset();
    // Submit the form or perform any other necessary actions
    //   const formData = new FormData();
    //   formData.append("first-name", firstName);
    //   formData.append("last-name", lastName);
    //   formData.append("email", emailAddress);
    //   formData.append("password", password);

    //   // Send data to Formspree
    //   fetch(signForm.action, {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         alert("Form submitted successfully!");
    //         signForm.reset();
    //       } else {
    //         console.error("Form submission error:", response.statusText);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Network error:", error);
    //     });
    // }
  }
}

signForm.addEventListener("submit", handleSubmit); // Validate first name
