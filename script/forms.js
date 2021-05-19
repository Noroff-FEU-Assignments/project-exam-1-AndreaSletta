// validation contact form

const formContainerHeading = document.querySelector(".formcontainer > h1");

const contactform = document.querySelector(".contactform");

const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const textarea = document.querySelector("#textarea");
const textareaError = document.querySelector("#textareaError");

const submit = document.querySelector(".submit");

function validateForm() {
  if (checkLength(fullName.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(textarea.value, 25)) {
    textareaError.style.display = "none";
  } else {
    textareaError.style.display = "block";
  }

  // confirm

  if (
    checkLength(fullName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15) &&
    checkLength(textarea.value, 25)
  ) {
    formContainerHeading.style.display = "none";
    contactform.style.display = "block";
    contactform.style.margin = "auto";
    contactform.innerHTML =
      "<h2>" +
      "We have recieved your message and will respond to you soon!" +
      "</h2>";
  }
}

submit.addEventListener("click", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
