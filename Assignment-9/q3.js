// Q3: Add FAQ toggling, hover feedback, and answer-input focus styling.

$(function () {
  $(".faq-question").on("click", function () {
    $(this).next(".faq-answer").stop(true, true).slideToggle();
  });

  $(".faq-question").hover(
    function () {
      $(this).css("color", "#075ca8");
    },
    function () {
      $(this).css("color", "");
    }
  );

  $(".faq-question").on("dblclick", function () {
    $(".faq-answer").stop(true, true).slideUp();
  });

  // focusin/focusout bubble, so these delegated handlers also work for dynamic inputs.
  $("main").on("focusin", ".answer-input", function () {
    $(this).closest(".faq-item").find(".faq-question").css("background-color", "#fff1bd");
  });

  $("main").on("focusout", ".answer-input", function () {
    $(this).closest(".faq-item").find(".faq-question").css("background-color", "");
  });
});
