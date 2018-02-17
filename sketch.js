var cols, rows;
var scl = 20;
var w = 500;
var h = 500;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(500, 500, WEBGL);
  cols = w/ scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.02;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }


  background(10, -15, 75, -100);
  translate(0, 50);
  rotateX(PI/3);
  fill(969, 90, 10, 70);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+0.9)*scl, terrain[x][y+ 56, 68, 34]);
    }
    endShape();
  }
}