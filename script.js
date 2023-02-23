// first name validity //
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", function (event) {
  if (firstName.validity.valueMissing) {
    firstName.setCustomValidity("Please enter your first name.");
  } else if (firstName.value.length < 2) {
    firstName.setCustomValidity("Please enter at least two characters for your first name.");
  } else {
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(firstName.value)) {
      firstName.setCustomValidity("Please enter a valid first name.");
    } else {
      firstName.setCustomValidity("");
    }
  }
});

// last name validity //
var firstName = document.getElementById("lastName");
firstName.addEventListener("input", function (event) {
  if (firstName.validity.valueMissing) {
    firstName.setCustomValidity("Please enter your last name.");
  } else if (firstName.value.length < 2) {
    firstName.setCustomValidity("Please enter at least two characters for your last name.");
  } else {
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(firstName.value)) {
      firstName.setCustomValidity("Please enter a valid last name.");
    } else {
      firstName.setCustomValidity("");
    }
  }
});

// email validity //
var email = document.getElementById("subject");
email.addEventListener("input", function (event) {
  if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter your email address.");
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

// message validation //
var message = document.getElementById("message");
message.addEventListener("input", function (event) {
  if (message.validity.valueMissing) {
    message.setCustomValidity("Please enter a message.");
  } else {
    message.setCustomValidity("");
  }
});

// hamburger menu
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navUl.classList.toggle('expanded');
});



