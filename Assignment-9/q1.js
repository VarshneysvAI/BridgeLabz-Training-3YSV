// Q1: Set a time-based greeting and add greeting interactions.

$(function () {
  const hour = new Date().getHours();
  let timeOfDay = "Evening";

  if (hour < 12) {
    timeOfDay = "Morning";
  } else if (hour < 17) {
    timeOfDay = "Afternoon";
  }

  $("#greeting").text(`Good ${timeOfDay}, welcome to BridgeLabz!`);

  $("#change-greeting").on("click", function () {
    const quotes = [
      "Keep learning; every step moves you forward.",
      "Great things are built one line at a time.",
      "Your next idea could make a difference.",
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#greeting").text(quote);
  });

  // Clicking or keyboard-activating the greeting also gives the requested alert.
  $("#greeting").on("click", function () {
    alert($(this).text());
  });

  $("#greeting").on("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      alert($(this).text());
    }
  });

  $("#toggle-welcome").on("click", function () {
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $("#welcome-message").toggle();
    $(this).attr("aria-expanded", String(!isExpanded));
  });
});