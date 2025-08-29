$(document).ready(function () {
  // Init Masonry
  var $grid = $(".grid").masonry({
    gutter: ".grid-gutter-sizer",
    horizontalOrder: true,
    itemSelector: ".grid-item",
    percentPosition: true,
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });
});
