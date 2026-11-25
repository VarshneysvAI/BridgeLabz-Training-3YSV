// Q6: Manage notification subscriptions and bind events to added topics.

$(function () {
  function showMessage(message) {
    $("<p>", { class: "success-message", text: message }).appendTo("#messages");
  }

  function toggleTopic() {
    const isSubscribed = $(this).toggleClass("subscribed").hasClass("subscribed");
    $(this).attr("aria-pressed", String(isSubscribed));
    showMessage(`${$(this).text()} ${isSubscribed ? "added to" : "removed from"} your topics.`);
  }

  // Bind each topic directly so the same handler can later be detached with off().
  $(".topic-button").on("click", toggleTopic);

  $("#subscribe").on("click", function () {
    $("#notification-status").text("Notifications are enabled.");
    showMessage("You are subscribed to notifications.");
  });

  $("#unsubscribe").on("click", function () {
    $("#notification-status").text("Notifications are disabled.");
    showMessage("You are unsubscribed from notifications.");
  });

  $("#add-topic-form").on("submit", function (event) {
    event.preventDefault();
    const topicName = $("#new-topic").val().trim();

    if (!topicName) {
      return;
    }

    const $topicButton = $("<button>", {
      class: "topic-button",
      type: "button",
      "aria-pressed": "false",
      text: topicName,
    });
    const $removeButton = $("<button>", {
      class: "remove-topic",
      type: "button",
      text: "Remove",
    });

    $topicButton.on("click", toggleTopic);
    $("<div>", { class: "topic-item" }).append($topicButton, $removeButton).appendTo("#topic-list");
    $("#new-topic").val("");
    showMessage(`Added the ${topicName} topic.`);
  });

  $("#topic-list").on("click", ".remove-topic", function () {
    const $topicButton = $(this).siblings(".topic-button");
    const topicName = $topicButton.text();

    $topicButton.off("click", toggleTopic);
    $(this).closest(".topic-item").remove();
    showMessage(`Removed the ${topicName} topic.`);
  });
});
