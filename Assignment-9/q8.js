// Q8: Add and remove posts, position tags, and highlight matching keywords.

$(function () {
  let postNumber = $(".post").length;
  let tagNumber = 0;

  function createPost(title, description, featured) {
    const $post = $("<li>", { class: featured ? "post featured" : "post" });
    $("<h2>").text(title).appendTo($post);
    $("<p>").text(description).appendTo($post);
    $("<div>", { class: "post-tags" }).appendTo($post);

    const $controls = $("<div>", { class: "post-controls" });
    $("<button>", { class: "tag-before", type: "button", text: "Add tag before" }).appendTo($controls);
    $("<button>", { class: "tag-after", type: "button", text: "Add tag after" }).appendTo($controls);
    $controls.appendTo($post);
    return $post;
  }

  $("#add-post").on("click", function () {
    postNumber += 1;
    $("#post-list").append(createPost(`New Post ${postNumber}`, "A newly added blog post.", false));
  });

  $("#prepend-featured").on("click", function () {
    $("#post-list").prepend(createPost("Featured Post", "This post was added to the top of the list.", true));
  });

  $("#remove-last").on("click", function () {
    $("#post-list").children(".post").last().remove();
  });

  function addTag($post, placement) {
    tagNumber += 1;
    const $tag = $("<span>", { class: "tag", text: `tag-${tagNumber}` });
    const $tagContainer = $post.find(".post-tags");

    if (placement === "before") {
      $tagContainer.before($tag);
    } else {
      $tagContainer.after($tag);
    }
  }

  // Delegated handlers also support the controls on posts added later.
  $("#post-list").on("click", ".tag-before", function () {
    addTag($(this).closest(".post"), "before");
  });
  $("#post-list").on("click", ".tag-after", function () {
    addTag($(this).closest(".post"), "after");
  });

  $("#keyword-search").on("keyup", function () {
    const keyword = $(this).val().trim().toLowerCase();

    $(".post").each(function () {
      const containsKeyword = keyword && $(this).text().toLowerCase().includes(keyword);
      $(this).toggleClass("highlighted", Boolean(containsKeyword));
      $(this).css("background-color", containsKeyword ? "#fff1bd" : "");
    });
  });
});
