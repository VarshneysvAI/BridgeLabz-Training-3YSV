// Q4: Apply visibility effects to a selected banner and rotate automatically.

$(function () {
  function selectedBanner() {
    return $(`#${$("#banner-picker").val()}`);
  }

  $("#hide-banner").on("click", function () {
    selectedBanner().hide();
  });

  $("#show-banners").on("click", function () {
    $(".banner:hidden").fadeIn(300);
  });

  $("#slide-banner").on("click", function () {
    selectedBanner().stop(true, true).slideToggle(300);
  });

  $("#fade-in-banner").on("click", function () {
    selectedBanner().stop(true, true).fadeIn(300);
  });

  $("#fade-out-banner").on("click", function () {
    selectedBanner().stop(true, true).fadeOut(300);
  });

  let currentIndex = 0;
  const $banners = $(".banner");

  // A five-second interval advances one banner using jQuery fade effects.
  window.setInterval(function () {
    const nextIndex = (currentIndex + 1) % $banners.length;
    $banners.eq(currentIndex).stop(true, true).fadeOut(400, function () {
      $banners.eq(nextIndex).stop(true, true).fadeIn(400);
      currentIndex = nextIndex;
      $("#banner-picker").val($banners.eq(currentIndex).attr("id"));
    });
  }, 5000);
});
