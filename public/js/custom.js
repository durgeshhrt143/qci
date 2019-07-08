$(function() {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 50) {
      //clearHeader, not clearheader - caps H
      $("body").addClass("stickyHeader");
    } else {
      $("body").removeClass("stickyHeader");
    }
  });
});
