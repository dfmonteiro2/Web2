speed (0)
record();
reset();
hide();

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 speed (300)
 replay();
 speed (0)  // why 2 different speeds? //
});

$("#button-eraser").on("click",function() {
	$(this).addClass("selected");
	tool = "eraser";
	lineWidth(30);
	lineColor("white");
});

$("#button-color-tan").on("click",function() {
	$(this).addClass("selected");
	tool = "brush-tan";
	lineWidth(15);
	lineColor("tan");
});

$("#button-color-blue").on("click",function() {
	$(this).addClass("selected");
	tool = "brush-blue";
	lineWidth(15);
	lineColor("blue");
});

$("#button-color-green").on("click",function() {
	$(this).addClass("selected");
	tool = "brush-green";
	lineWidth(15);
	lineColor("green");
});

$("#button-color-brown").on("click",function() {
	$(this).addClass("selected");
	tool = "brush-brown";
	lineWidth(15);
	lineColor("brown");
});

$("#button-triangle").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "triangle";
 lineWidth(width);
 lineColor(color);
});

$("#button-shape").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "shape";
 lineWidth(width);
 lineColor(color);
});


/* $("#button-crab").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "crab";
 lineWidth(width);
 lineColor(color);
});
*/

function triangle() {
  angle(0);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
}

function shape() {
  angle(0);
  forward(20);
  rotate(72);
  forward(20);
  rotate(72);
  forward(20);
  rotate(72);
  forward(20);
  rotate(72);
  forward(20);
  rotate(72);
}

/* function crab() {

box-shadow:
    0 0 0 1em red,
    0 1em 0 1em red,
    -2.5em 1.5em 0 .5em red,
    2.5em 1.5em 0 .5em red,
    -3em -3em 0 0 red,
    3em -3em 0 0 red,
    -2em -2em 0 0 red,
    2em -2em 0 0 red,
    -3em -1em 0 0 red,
    -2em -1em 0 0 red,
    2em -1em 0 0 red,
    3em -1em 0 0 red,
    -4em 0 0 0 red,
    -3em 0 0 0 red,
    3em 0 0 0 red,
    4em 0 0 0 red,
    -5em 1em 0 0 red,
    -4em 1em 0 0 red,
    4em 1em 0 0 red,
    5em 1em 0 0 red,
    -5em 2em 0 0 red,
    5em 2em 0 0 red,
    -5em 3em 0 0 red,
    -3em 3em 0 0 red,
    3em 3em 0 0 red,
    5em 3em 0 0 red,
    -2em 4em 0 0 red,
    -1em 4em 0 0 red,
    1em 4em 0 0 red,
    2em 4em 0 0 red;

    background: red;
    width: 1em;
    height: 1em;
    overflow: hidden;
*/

var drawing = false;
var tool = "pen";

var color="black";
var width=4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser") { 
    drawing = true;
  } else if(tool == "triangle") {
    triangle();
  } else if(tool == "brush-tan")
    drawing = true;
});

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "shape")
    shape();
});
	
$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "brush-blue")
    drawing = true;
});
	  
$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "brush-green")
    drawing = true;
});
  
$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "brush-brown")
    drawing = true;
});  
  
$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});






