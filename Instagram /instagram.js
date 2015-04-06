function addPerson(image,link,like, caption) {
 var $container = $("div.container");

 var $div = $("<div>");
 var $image = $("<img>").attr("src",image);
 var $link = $("<a>").attr("href", link);
 var $likes = $("<h1>").text(like);
 var $caption = $("<h3>").text(caption);
 
 $link.append($image);

 
 
$div.append($image).append($link).append($likes).append($caption)

$container.append($div);
}

addPerson("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg", "https://instagram.com/p/0lS-LWTbw9/", "432", "RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits");


for(var i = 0; i < data.data.length; i++) {
  var item = data.data[i];
  
  var name = item.name;
  var image = item.img;
  addImage(name, image);
}



