// Q7: Filter courses as the user types and highlight the matching title text.

$(function () {
  const $courses = $(".course");

  function filterCourses() {
    const searchTerm = $("#course-search").val().trim();
    const normalizedTerm = searchTerm.toLowerCase();
    let matchedCount = 0;

    $courses.each(function () {
      const $title = $(this).find(".course-title");
      const originalTitle = $title.attr("data-original-title") || $title.text();
      $title.attr("data-original-title", originalTitle);

      const matchIndex = originalTitle.toLowerCase().indexOf(normalizedTerm);
      const matches = matchIndex !== -1;

      if (matches) {
        matchedCount += 1;
      }

      // Build text nodes rather than interpreting the search term as HTML.
      if (searchTerm && matches) {
        const beforeMatch = originalTitle.slice(0, matchIndex);
        const matchedText = originalTitle.slice(matchIndex, matchIndex + searchTerm.length);
        const afterMatch = originalTitle.slice(matchIndex + searchTerm.length);
        $title.empty().append(document.createTextNode(beforeMatch));
        $("<span>").text(matchedText).css({
          "background-color": "#ffeb3b",
          "font-weight": "bold",
        }).appendTo($title);
        $title.append(document.createTextNode(afterMatch));
      } else {
        $title.text(originalTitle);
      }

      const shouldShow = !$("#hide-unmatched").is(":checked") || matches;
      $(this).toggle(shouldShow);
    });

    $("#search-count").text(`${matchedCount} course${matchedCount === 1 ? "" : "s"} matched`);
  }

  $("#course-search").on("keyup", filterCourses);
  $("#hide-unmatched").on("change", filterCourses);

  $("#clear-search").on("click", function () {
    $("#course-search").val("");
    filterCourses();
    $("#course-search").trigger("focus");
  });
});
