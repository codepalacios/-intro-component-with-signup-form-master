// Vars
const form = document.getElementById("subscriptionForm");
const firstName = document.getElementById("firstName");
const firstNameWrapper = document.getElementById("firstNameWrapper");
const firstNameErrorIcon = document.getElementById("firstNameErrorIcon");
const firstNameErrorText = document.getElementById("firstNameErrorText");
const lastName = document.getElementById("lastName");
const lastNameWrapper = document.getElementById("lastNameWrapper");
const lastNameErrorIcon = document.getElementById("lastNameErrorIcon");
const lastNameErrorText = document.getElementById("lastNameErrorText");
const email = document.getElementById("email");
const emailWrapper = document.getElementById("emailWrapper");
const emailErrorIcon = document.getElementById("emailErrorIcon");
const emailErrorText = document.getElementById("emailErrorText");
const password = document.getElementById("password");
const passwordWrapper = document.getElementById("passwordWrapper");
const passwordErrorIcon = document.getElementById("passwordErrorIcon");
const passwordErrorText = document.getElementById("passwordErrorText");
const submitButton = document.getElementById("submitButton");
const subscriptionSuccess = document.getElementById("subscriptionSuccess");
let validEmail = /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Events
form.addEventListener("submit", (e) => {
  let formIsValid = true;
  if (firstName.value.trim() === "") {
    firstNameWrapper.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.classList.add("input-wrapper__field--error");
    firstNameErrorIcon.classList.remove("hidden");
    firstNameErrorText.classList.remove("hidden");
    formIsValid = false;
  } else {
    firstNameWrapper.style.border = "";
    firstNameErrorIcon.classList.add("hidden");
    firstNameErrorText.classList.add("hidden");
  }
  if (lastName.value.trim() === "") {
    lastNameWrapper.style.border = "2px solid hsl(0, 100%, 74%)";
    lastName.classList.add("input-wrapper__field--error");
    lastNameErrorIcon.classList.remove("hidden");
    lastNameErrorText.classList.remove("hidden");
    formIsValid = false;
  } else {
    lastNameWrapper.style.border = "";
    lastNameErrorIcon.classList.add("hidden");
    lastNameErrorText.classList.add("hidden");
  }
  if (email.value.trim() === "") {
    emailWrapper.style.border = "2px solid hsl(0, 100%, 74%)";
    email.classList.add("input-wrapper__field--error");
    emailErrorIcon.classList.remove("hidden");
    emailErrorText.innerHTML = "Email cannot be empty";
    emailErrorText.classList.remove("hidden");
    formIsValid = false;
  } else if (validEmail.test(email.value)) {
    emailWrapper.style.border = "";
    emailErrorIcon.classList.add("hidden");
    emailErrorText.classList.add("hidden");
  } else {
    emailWrapper.style.border = "2px solid hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)";
    email.classList.add("input-wrapper__field--error");
    emailErrorIcon.classList.remove("hidden");
    emailErrorText.innerHTML = "Looks like this is not an email";
    emailErrorText.classList.remove("hidden");
    formIsValid = false;
  }
  if (password.value.trim() === "") {
    passwordWrapper.style.border = "2px solid hsl(0, 100%, 74%)";
    password.classList.add("input-wrapper__field--error");
    passwordErrorIcon.classList.remove("hidden");
    passwordErrorText.classList.remove("hidden");
    formIsValid = false;
  } else {
    passwordWrapper.style.border = "";
    passwordErrorIcon.classList.add("hidden");
    passwordErrorText.classList.add("hidden");
  }
  if (!formIsValid) {
    e.preventDefault();
  } else {
    form.classList.add("hidden");
    subscriptionSuccess.classList.remove("hidden");
    e.preventDefault();
  }
});

email.addEventListener("click", () => {
  email.style.color = "";
});
