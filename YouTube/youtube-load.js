function addVideo(video) {
  var title = video.snippet.title;
  var thumbnail = video.snippet.thumbnails.default.url;
  
  var $div = $("<div>");
  
  var $title = $("<h4>").text(title);
  var $image = $("<img>").attr("src", thumbnail);
  
  $div.append($image).append($title);
  
  $(".container").append($div);
}

function loadYoutube(videosData) {
  for(var i = 0; i < videosData.items.length; i++) {
    addVideo(videosData.items[i]);
}

  showModal(videosData.items[0]);
}


function showModal(video) {
   $(".modal").empty();
   
   // All your code to add stuff in 
   var title = video.snippet.title;
     var thumbnail = video.snippet.thumbnails.default.url;
  
     var $div = $("<div>");
  
     var $title = $("<h4>").text(title);
     var $image = $("<img>").attr("src", thumbnail);
  
     $div.append($image).append($title);
  
     $(".modal").append($div);
   
   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}