import React, { useEffect } from "react";
import $ from "jquery";

const App = () => {
  useEffect(() => {
    $(".navbar-toggle").click(function () {
      $(this).toggleClass("act");
      if ($(this).hasClass("act")) {
        $(".main-menu").addClass("act");
      } else {
        $(".main-menu").removeClass("act");
      }
    });

    $(document).on("click", ".page-scroll a", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    $("body").scrollspy({
      target: ".site-header",
      offset: 10,
    });

    var $section = $(".section-skills");
    function loadDaBars() {
      $(".progress .progress-bar").progressbar({
        transition_delay: 500,
      });
    }

    $(document).bind("scroll", function (ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        loadDaBars();
        $(document).unbind("scroll");
      }
    });

    if ($(".section-counters .start").length > 0) {
      $(".section-counters .start").each(function () {
        var stat_item = $(this),
          offset = stat_item.offset().top;
        $(window).scroll(function () {
          if (
            $(window).scrollTop() > offset - 1000 &&
            !stat_item.hasClass("counting")
          ) {
            stat_item.addClass("counting");
            stat_item.countTo();
          }
        });
      });
    }

    $("#infinity").data("countToOptions", {
      onComplete: function (value) {
        count.call(this, {
          from: value,
          to: value + 1,
        });
      },
    });

    $("#infinity").each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }

    var s = skrollr.init({
      forceHeight: false,
      smoothScrolling: false,
      mobileDeceleration: 0.004,
      mobileCheck: function () {
        return false;
      },
    });
  }, []);
};

export default App;
