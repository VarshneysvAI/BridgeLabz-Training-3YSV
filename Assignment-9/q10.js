// Q10: Validate registration fields, including duplicate emails in this session.

$(function () {
  const registeredEmails = new Set();
  const fields = ["name", "email", "password"];

  function getFieldError(fieldName) {
    const value = $(`#${fieldName}`).val().trim();

    if (fieldName === "name") {
      return value ? "" : "Name is required.";
    }

    if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const normalizedEmail = value.toLowerCase();

      if (!emailPattern.test(value)) {
        return "Enter a valid email address.";
      }
      if (registeredEmails.has(normalizedEmail)) {
        return "This email has already been registered.";
      }
      return "";
    }

    if (fieldName === "password" && value.length < 8) {
      return "Password must be at least 8 characters.";
    }

    return "";
  }

  function validateField(fieldName) {
    const errorMessage = getFieldError(fieldName);
    const $field = $(`#${fieldName}`);

    $field.css("border", errorMessage ? "2px solid red" : "");
    $(`#${fieldName}-error`).text(errorMessage);
    return errorMessage === "";
  }

  fields.forEach((fieldName) => {
    $(`#${fieldName}`).on("input", function () {
      validateField(fieldName);
      $("#form-message").text("").removeClass("success error");
    });
  });

  $("#registration-form").on("submit", function (event) {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      $("#form-message").text("Please correct the highlighted fields.").removeClass("success").addClass("error");
      return;
    }

    registeredEmails.add($("#email").val().trim().toLowerCase());
    $("#form-message").text("Registration successful!").removeClass("error").addClass("success");
    this.reset();
    fields.forEach((fieldName) => {
      $(`#${fieldName}`).css("border", "");
      $(`#${fieldName}-error`).text("");
    });
  });
});
