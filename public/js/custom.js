$(function() {
  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    if (scroll >= 15) {
      $("body").addClass("stickyHeader");
    } else {
      $("body").removeClass("stickyHeader");
    }
  });
});
