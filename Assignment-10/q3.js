// Q3: Run `json-server --watch q3/db.json --port 3003` from this folder.
// Filter and sort tasks using JSON Server query parameters.
const API_URL = "http://localhost:3003";

function loadTasks() {
  const selection = $("#task-filter").val();
  const query = { _sort: "title", _order: "asc" };

  if (["low", "medium", "high"].includes(selection)) {
    query.priority = selection;
  } else if (selection === "completed") {
    query.completed = true;
  }

  $("#task-error").text("");
  $("#task-list").empty().append($("<li>").text("Loading tasks..."));

  $.ajax({
    url: `${API_URL}/tasks`,
    method: "GET",
    data: query,
    dataType: "json",
  })
    .done(renderTasks)
    .fail((_, status, error) => {
      $("#task-list").empty();
      $("#task-error").text("Could not load tasks. Check that JSON Server is running.");
      console.error("Task request failed:", status, error);
    });
}

function renderTasks(tasks) {
  const $taskList = $("#task-list").empty();

  if (tasks.length === 0) {
    $taskList.append($("<li>").text("No tasks match this filter."));
    return;
  }

  tasks.forEach((task) => {
    const $checkbox = $("<input>", {
      type: "checkbox",
      checked: task.completed,
      "aria-label": `Mark ${task.title} as completed`,
    });
    const $label = $("<label>").append($checkbox, document.createTextNode(` ${task.title}`));
    const $priority = $("<span>", { class: "priority" }).text(`(${task.priority} priority)`);
    const $item = $("<li>").append($label, $priority);

    if (task.completed) {
      $item.addClass("completed");
    }

    $checkbox.on("change", function () {
      const previousValue = task.completed;
      const nextValue = this.checked;
      task.completed = nextValue;
      $item.toggleClass("completed", nextValue);
      this.disabled = true;
      $("#task-error").text("");

      $.ajax({
        url: `${API_URL}/tasks/${encodeURIComponent(task.id)}`,
        method: "PATCH",
        contentType: "application/json",
        data: JSON.stringify({ completed: nextValue }),
      })
        .fail((_, status, error) => {
          task.completed = previousValue;
          this.checked = previousValue;
          $item.toggleClass("completed", previousValue);
          $("#task-error").text(`Could not update "${task.title}". The change was reverted.`);
          console.error("Task update failed:", status, error);
        })
        .always(() => {
          this.disabled = false;
        });
    });

    $taskList.append($item);
  });
}

$(function () {
  $("#task-filter").on("change", loadTasks);
  loadTasks();
});
