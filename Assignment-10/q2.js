// Q2: Run `json-server --watch q2/db.json --port 3002` from this folder.
const API_URL = "http://localhost:3002";

function showError(message) {
  document.querySelector("#error-message").textContent = message;
}

function renderEmployee(employee) {
  const row = document.createElement("article");
  row.className = "employee-row";

  const name = document.createElement("h3");
  name.textContent = employee.name;

  const status = document.createElement("span");
  status.className = `employee-status ${employee.status}`;
  status.textContent = employee.status;

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.textContent = employee.status === "active" ? "Set inactive" : "Set active";
  toggleButton.setAttribute("aria-label", `Change ${employee.name}'s status`);

  toggleButton.addEventListener("click", () => {
    const previousStatus = employee.status;
    const nextStatus = previousStatus === "active" ? "inactive" : "active";

    // Update immediately, then roll back if the PATCH request fails.
    employee.status = nextStatus;
    status.textContent = nextStatus;
    status.className = `employee-status ${nextStatus}`;
    toggleButton.textContent = nextStatus === "active" ? "Set inactive" : "Set active";
    toggleButton.disabled = true;
    showError("");

    const request = new XMLHttpRequest();
    request.open("PATCH", `${API_URL}/employees/${encodeURIComponent(employee.id)}`);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
      toggleButton.disabled = false;
      if (request.status < 200 || request.status >= 300) {
        revertStatus(previousStatus);
      }
    };
    request.onerror = () => {
      toggleButton.disabled = false;
      revertStatus(previousStatus);
    };

    function revertStatus(statusToRestore) {
      employee.status = statusToRestore;
      status.textContent = statusToRestore;
      status.className = `employee-status ${statusToRestore}`;
      toggleButton.textContent = statusToRestore === "active" ? "Set inactive" : "Set active";
      showError(`Could not update ${employee.name}'s status. The change was reverted.`);
    }

    request.send(JSON.stringify({ status: nextStatus }));
  });

  row.append(name, status, toggleButton);
  document.querySelector("#employee-list").append(row);
}

function loadEmployees() {
  const request = new XMLHttpRequest();
  request.open("GET", `${API_URL}/employees`);

  request.onload = () => {
    document.querySelector("#loading-message").hidden = true;

    if (request.status < 200 || request.status >= 300) {
      showError("Could not load employees. Check that JSON Server is running.");
      return;
    }

    try {
      const employees = JSON.parse(request.responseText);
      employees.forEach(renderEmployee);
    } catch (error) {
      showError("The employee response was invalid.");
      console.error("Could not parse employees:", error);
    }
  };

  request.onerror = () => {
    document.querySelector("#loading-message").hidden = true;
    showError("Could not load employees. Check that JSON Server is running.");
  };

  request.send();
}

loadEmployees();
