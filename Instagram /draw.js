function addPerson(name,loc,image) {
 var $container = $("div.container");
 var $div = $("<div>").addClass("person");
 var $name = $("<h1>").text(name);
 var $loc = $("<h3>").text(loc);
 var $image = $("<img>").attr("src",image);
 
$div.append($name).append($loc).append($image);

$container.append($div);
}


addPerson("Bob Johnson","Boston, MA", "http://lorempixel.com/200/200/people/2/");
addPerson("Frank Scott","San Diego, CA", "http://lorempixel.com/200/200/people/3/");
addPerson("Amy Smith","New York, NY", "http://lorempixel.com/200/200/people/4/");
addPerson("Amy Smith","New York, NY", "http://lorempixel.com/200/200/people/4/");

addPerson("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg",
        "https://instagram.com/p/0lS-LWTbw9/", "432");