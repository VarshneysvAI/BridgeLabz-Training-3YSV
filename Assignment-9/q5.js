// Q5: Use jQuery traversal to work with managers, reports, and departments.

$(function () {
  $(".manager").on("click", function () {
    const managerId = $(this).attr("data-employee-id");
    const $department = $(this).closest(".department");

    $department.find(".employee").css("outline", "");
    $department.find(`.employee[data-manager="${managerId}"]`).css("outline", "3px solid #238636");
  });

  // The contact paragraph is the employee card's next sibling.
  $(".employee").hover(
    function () {
      $(this).next(".contact-info").stop(true, true).slideDown(150);
    },
    function () {
      $(this).next(".contact-info").stop(true, true).slideUp(150);
    }
  );

  $(".department > h2").on("click", function () {
    const $department = $(this).closest(".department");
    $department.children(".employee-row").children(".employee")
      .css("background-color", "#e7f3ff");
  });

  $("#random-employee").on("click", function () {
    const $employees = $(".employee");
    const randomIndex = Math.floor(Math.random() * $employees.length);
    const $chosen = $employees.eq(randomIndex);

    $(".employee").css("background-color", "");
    $chosen.css("background-color", "#fff1bd");
    $chosen.closest(".employee-row").siblings(".employee-row")
      .find(".employee").css("background-color", "#e7f3ff");
  });

  // parent() scopes find() to the department containing the clicked control.
  $(".team-toggle").on("click", function () {
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $(this).parent().find(".employee-row").toggle();
    $(this).attr("aria-expanded", String(!isExpanded));
  });
});
