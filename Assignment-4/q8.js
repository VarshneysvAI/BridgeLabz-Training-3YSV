"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

function renderUserDetails(targetElement) {
  targetElement.textContent = JSON.stringify(user, null, 2);
}

if (typeof document !== "undefined") {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="name" value="${user.name}">
    <input name="email" type="email" value="${user.email}">
    <input name="age" type="number" value="${user.age}">
    <button type="submit">Update User</button>
  `;
  const details = document.createElement("pre");
  document.body.append(form, details);
  renderUserDetails(details);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedValues = Object.fromEntries(new FormData(form));
    user.name = updatedValues.name;
    user.email = updatedValues.email;
    user.age = Number(updatedValues.age);
    renderUserDetails(details);
    console.log("Updated user:", user);
  });
} else {
  user.name = "John Updated";
  console.log("Updated user:", user);
}
