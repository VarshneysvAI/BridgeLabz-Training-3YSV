// Q5: Run `json-server --watch q5/db.json --port 3005` from this folder.
const API_URL = "http://localhost:3005";

async function loadTimetable(day) {
  const tableBody = document.querySelector("#timetable-body");
  const message = document.querySelector("#timetable-message");
  tableBody.replaceChildren();
  message.textContent = "Loading timetable...";

  try {
    const query = new URLSearchParams({ day });
    const response = await fetch(`${API_URL}/timetable?${query.toString()}`);

    if (!response.ok) {
      throw new Error(`Timetable request failed with status ${response.status}`);
    }

    const classes = await response.json();
    if (classes.length === 0) {
      message.textContent = "No classes today.";
      return;
    }

    classes.forEach((classItem) => {
      const row = document.createElement("tr");
      [classItem.time, classItem.subject, classItem.faculty].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });
      tableBody.append(row);
    });

    message.textContent = "";
  } catch (error) {
    message.textContent = "Could not load the timetable. Check that JSON Server is running.";
    console.error("Timetable request failed:", error);
  }
}

document.querySelector("#day-select").addEventListener("change", (event) => {
  loadTimetable(event.target.value);
});

loadTimetable(document.querySelector("#day-select").value);
