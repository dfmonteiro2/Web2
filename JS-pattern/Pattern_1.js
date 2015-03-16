<!DOCTYPE html>
<html>
	<!DOCTYPE html>
	<html>
	<body>
		<script src='http://cykod.github.io/Logoish/logoish.js'></script>

<script>
Logoish.init();

speed(0);

lineWidth(1)

function triangle(size) {
  forward(size);
  rotate(120);
  forward(size);
  rotate(120);
  forward(size);
  rotate(120);
}

for(var y = 0; y < 40; y++) {
  for(var x = 0; x < 40; x++) {
    moveTo(x*15,y * 15);
    triangle(25);
  }
}
</script>
</body></html>