class Tile {

	constructor(x, y, wh, next) {
		this.x = x;
		console.log(x);
		this.y = y;
		this.wh = wh;
		this.next = next;
		this.color=random(255);
	}
	show() {
		fill(this.color);
		// console.log(this.x);
		rect(this.x,this.y,this.wh,this.wh);
	}
}
