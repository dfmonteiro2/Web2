$(".scrolling").scrollFlight();

$("h1").on("arrived",function(e) {
  $(this).addClass("on-page");
});
