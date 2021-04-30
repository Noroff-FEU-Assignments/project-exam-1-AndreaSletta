// email input on footer

const footerButton = document.querySelector(".footerbutton");

const footerEmail = document.querySelector(".footeremail");

const emailFooter = document.querySelector("#emailfooter");
const emailFooterError = document.querySelector("#emailfootererror");

function validateFormFooter() {
  if (checkLengthFooter(emailFooter.value, 3)) {
    emailFooterError.style.display = "none";
  } else {
    emailFooterError.style.display = "block";
  }

  // confirm

  if (
    checkLengthFooter(emailFooter.value, 3) &&
    validateEmailFooter(emailFooter.value)
  ) {
    footerEmail.innerHTML +=
      "<p>" + "We have recieved your message and will respond to you soon!";
  }
}

footerButton.addEventListener("click", validateFormFooter);

function checkLengthFooter(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmailFooter(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
