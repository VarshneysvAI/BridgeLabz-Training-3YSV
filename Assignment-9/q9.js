// Q9: Keep two jQuery versions isolated with noConflict(true).

$(function () {
  // Save jQuery 3 and release the short global alias before loading jQuery 2.
  const jqueryV1 = window.jQuery.noConflict();
  const secondJQueryScript = document.createElement("script");
  secondJQueryScript.src = "https://code.jquery.com/jquery-2.2.4.min.js";

  secondJQueryScript.onload = function () {
    // Capture jQuery 2, then restore jQuery 3 as the global jQuery reference.
    const jqueryV2 = window.jQuery.noConflict(true);
    let currentSlide = 0;
    const $slides = jqueryV1(".slide");

    function showSlide(index) {
      currentSlide = (index + $slides.length) % $slides.length;
      $slides.removeClass("active").eq(currentSlide).addClass("active");
    }

    jqueryV1("#previous-slide").on("click", function () {
      showSlide(currentSlide - 1);
    });
    jqueryV1("#next-slide").on("click", function () {
      showSlide(currentSlide + 1);
    });
    window.setInterval(function () {
      showSlide(currentSlide + 1);
    }, 3000);

    jqueryV1(".widget").on("click", function () {
      jqueryV1(".widget").removeClass("active");
      jqueryV1(this).addClass("active");
    });

    jqueryV2("#open-notification").on("click", function () {
      jqueryV2("#notification-modal").fadeIn(200);
    });
    jqueryV2("#close-notification").on("click", function () {
      jqueryV2("#notification-modal").fadeOut(200);
    });
    jqueryV2(".tooltip-target").hover(
      function () {
        jqueryV2(this).next(".tooltip").stop(true, true).fadeIn(100);
      },
      function () {
        jqueryV2(this).next(".tooltip").stop(true, true).fadeOut(100);
      }
    );

    jqueryV1("#load-status").text("Both jQuery versions are loaded and isolated.");
  };

  secondJQueryScript.onerror = function () {
    jqueryV1("#load-status").text("Could not load jQuery 2.2.4. Check your internet connection.");
  };

  document.head.appendChild(secondJQueryScript);
});
