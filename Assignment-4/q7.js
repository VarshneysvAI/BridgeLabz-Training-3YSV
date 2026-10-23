"use strict";

const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d]).{8,}$/;

function validateLogin(username, password) {
  const errors = [];
  if (!usernamePattern.test(username)) errors.push("Username must contain at least 5 characters.");
  if (!passwordPattern.test(password)) {
    errors.push("Password needs 8+ characters, a number, uppercase, lowercase, and special character.");
  }
  return errors;
}

if (typeof document !== "undefined") {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="username" placeholder="Username">
    <input name="password" type="password" placeholder="Password">
    <button type="submit">Login</button>
  `;
  document.body.append(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const errors = validateLogin(data.username, data.password);
    console.log(errors.length === 0 ? "Login validation successful." : errors);
  });
} else {
  console.log(`Login errors: ${JSON.stringify(validateLogin("admin1", "Admin@123"))}`);
}
