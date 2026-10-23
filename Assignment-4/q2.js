"use strict";

const studentValidationRules = {
  name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
};

function validateStudentForm(student) {
  const errors = {};
  for (const [field, rule] of Object.entries(studentValidationRules)) {
    if (!rule.test(student[field])) {
      errors[field] = `${field} is invalid.`;
    }
  }
  return errors;
}

function showValidationState(input, errorElement, message) {
  const isValid = message === "";
  input.style.border = `2px solid ${isValid ? "green" : "red"}`;
  errorElement.textContent = message;
}

if (typeof document !== "undefined") {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="name" placeholder="Name"><small></small>
    <input name="email" placeholder="Email"><small></small>
    <input name="phone" placeholder="Phone"><small></small>
    <input name="password" type="password" placeholder="Password"><small></small>
    <button type="submit">Register</button>
  `;
  document.body.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const errors = validateStudentForm(formData);
    [...form.elements].forEach((input) => {
      if (input.name) {
        showValidationState(input, input.nextElementSibling, errors[input.name] || "");
      }
    });
    console.log(Object.keys(errors).length === 0 ? "Student form is valid." : errors);
  });
}

const sampleStudent = {
  name: "Anita Sharma",
  email: "anita@example.com",
  phone: "9876543210",
  password: "Secure@123",
};
console.log(`Student validation errors: ${JSON.stringify(validateStudentForm(sampleStudent))}`);
