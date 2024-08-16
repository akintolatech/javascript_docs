/*
Lotus Javascript Documentation
Desc: Static class methods
All right reserved lotus code studios Apr 2021
*/
//NB: the code in the body of a class is always run on strict mode to ensure flexibility

class Point {
	//instance properties
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	// static methods
	static displayName = "Point";
	static distance (a, b){
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		let dist = Math.hypot(dx, dy);
		return dist;
	}
}

// Instantiating Point
p1 = new Point(4, 8);

//cant call static methods with class instance !!
console.log(p1.displayName);  //undefined

//static methods are called directly on the classes
console.log(Point.displayName);
console.log(Point.distance(4,4));