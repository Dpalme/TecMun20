$( document ).ready(function() {
  navBarScroll();
});

function navBarScroll() {
  $(document).scroll(function () {
    var $nav = $("header");
    $nav.toggleClass('white-bg', $(this).scrollTop() > $nav.height());
  });
}