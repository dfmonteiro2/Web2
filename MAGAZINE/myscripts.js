$('.js-meat').click(function () {
  $(this).text(function(i, text){
    return text === "MENU" ? "CLOSE" : "MENU";
  })
});