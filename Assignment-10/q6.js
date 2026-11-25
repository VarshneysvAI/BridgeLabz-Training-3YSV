// Q6: Run `json-server --watch q6/db.json --port 3006` from this folder.
const API_URL = "http://localhost:3006";

function showMessage(message, type) {
  const messageElement = document.querySelector("#registration-message");
  messageElement.textContent = message;
  messageElement.className = type;
}

document.querySelector("#registration-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim().toLowerCase();
  const submitButton = document.querySelector("#submit-registration");
  submitButton.disabled = true;
  showMessage("Checking email...", "");

  try {
    const existingUsers = await axios.get(`${API_URL}/users`, {
      params: { email },
    });

    const emailExists = existingUsers.data.some(
      (user) => user.email.toLowerCase() === email
    );

    if (emailExists) {
      showMessage("Email already registered.", "error");
      return;
    }

    await axios.post(`${API_URL}/users`, { name, email });
    showMessage("Registration successful.", "success");
    event.target.reset();
  } catch (error) {
    showMessage("Registration failed. Check that JSON Server is running.", "error");
    console.error("Registration request failed:", error);
  } finally {
    submitButton.disabled = false;
  }
});
