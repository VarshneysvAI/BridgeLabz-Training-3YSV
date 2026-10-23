"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  createForm() {
    const form = document.createElement("form");
    const fieldsMarkup = this.fields
      .map(
        (field) =>
          `<label for="${field.name}">${field.label}</label>` +
          `<input type="${field.type}" name="${field.name}" id="${field.name}"><br>`,
      )
      .join("");
    form.innerHTML = `${fieldsMarkup}<button type="submit">Submit</button>`;
    return form;
  }

  getFormData(form) {
    return Object.fromEntries(new FormData(form));
  }
}

if (typeof document !== "undefined") {
  const formBuilder = new FormBuilder([
    { type: "text", name: "username", label: "Username" },
    { type: "email", name: "email", label: "Email" },
  ]);
  const form = formBuilder.createForm();
  document.body.append(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formBuilder.getFormData(form));
  });
  console.log("Custom form created. Enter values and click Submit.");
} else {
  console.log("FormBuilder is ready for browser execution.");
}
