// Q9: Validate fields on submit and clear each error as its field is corrected.
const validationForm = document.querySelector("#validation-form");
const validationFields = {
  name: {
    input: document.querySelector("#validation-name"),
    error: document.querySelector("#validation-name-error"),
  },
  email: {
    input: document.querySelector("#validation-email"),
    error: document.querySelector("#validation-email-error"),
  },
  password: {
    input: document.querySelector("#validation-password"),
    error: document.querySelector("#validation-password-error"),
  },
};
const validationSuccess = document.querySelector("#validation-success");

function getFieldError(fieldName) {
  const value = validationFields[fieldName].input.value.trim();
  if (fieldName === "name" && !value) return "Name is required.";
  if (fieldName === "email" && !value.includes("@")) return "Enter a valid email.";
  if (fieldName === "password" && value.length < 6) return "Password must be at least 6 characters.";
  return "";
}

function validateField(fieldName) {
  const errorMessage = getFieldError(fieldName);
  validationFields[fieldName].error.textContent = errorMessage;
  return errorMessage === "";
}

Object.keys(validationFields).forEach((fieldName) => {
  validationFields[fieldName].input.addEventListener("input", () => {
    validateField(fieldName);
    validationSuccess.textContent = "";
  });
});

validationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isFormValid = Object.keys(validationFields).every(validateField);
  validationSuccess.textContent = isFormValid ? "Form submitted successfully." : "";
});
