const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const status = document.querySelector("#form-status");

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.hidden = !message;
  if (message) {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let valid = true;

  if (!name) {
    showError(nameInput, nameError, "Please enter your name.");
    valid = false;
  } else {
    showError(nameInput, nameError, "");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError(emailInput, emailError, "Please enter your email address.");
    valid = false;
  } else if (!emailPattern.test(email)) {
    showError(emailInput, emailError, "Enter an email address in the format name@example.com.");
    valid = false;
  } else {
    showError(emailInput, emailError, "");
  }

  if (!valid) {
    status.textContent = "Please correct the highlighted fields.";
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  status.textContent = "Form validation passed. This demo does not send or store your information.";
  form.reset();
  showError(nameInput, nameError, "");
  showError(emailInput, emailError, "");
});
