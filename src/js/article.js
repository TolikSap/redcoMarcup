$(function() {
    $(document).on("scroll resize", function() {
      $("div#scroll-bar").width(
        ($(document).scrollTop() / ($(document).height() - $(window).height()) * $(document).height()) + "px"
      );
    });
 });