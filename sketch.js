
let tiles = [];
let player;

function setup() {
  createCanvas(400,400);
  let resolution = 40;
  let cols = width / resolution;
  let rows = height / resolution;
  let x = 0;
  let y = (rows-1)*resolution;
  let dir = 1;
  tiles.push(new Tile(0,0,40,1));
  for (let i = 0; i < cols*rows;i++) {
    let tile = new Tile(x, y, resolution, i+1);
    tiles.push(tile);
    x= x+(resolution*dir);
    if(x>=width) {
      x-=resolution;
      y-=resolution;
      dir *=-1;
    }
    if(x<=-resolution){
      x=resolution;
      y-=resolution;
      dir *=-1;
    }
  }
}

function draw() {
  background(51);
  fill(50);
  for(let tile of tiles) {
    tile.show();
  }
}
