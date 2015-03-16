record();
reset();
hide();

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});

$("#button-eraser").on("click",function() {
	$(this).addClass("selected");
	$("button-pen").removeClass("selected");

	tool = "eraser"
	lineWidth(30);
	lineColor("white")
});

$("#button-pen").on("click",function() {
	$(this).addClass("selected");
	$("button-eraser").removeClass("selected");

});

tool = "earser";

var drawing = false;
var erasing = false;
var tool = "pen";

var color="black";
var width=1;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser") { 
    drawing = true;
  }
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






