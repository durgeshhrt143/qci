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
document.addEventListener("DOMContentLoaded", function() {
  const elems = document.querySelectorAll("select");
  M.FormSelect.init(elems);
});
