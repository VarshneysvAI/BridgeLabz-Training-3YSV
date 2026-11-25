// Q2: Highlight products, reveal details, and handle favorites and stock.

$(function () {
  $(".product").on("click", function () {
    $(".product").css("background-color", "");
    $(this).css("background-color", "#fff3cd");

    if ($(this).attr("data-in-stock") === "false") {
      alert(`${$(this).find("h2").text()} is currently out of stock.`);
    }
  });

  $(".product").hover(
    function () {
      $(this).find(".product-details").prop("hidden", false);
    },
    function () {
      $(this).find(".product-details").prop("hidden", true);
    }
  );

  // Stop propagation so favoriting does not also trigger the product click.
  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    const isSelected = $(this).toggleClass("selected").hasClass("selected");
    $(this).attr("aria-pressed", String(isSelected));
  });
});
