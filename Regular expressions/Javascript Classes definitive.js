/*
Lotus Javascript Documentation
Desc: Class notation definitive documentation
All right reserved lotus code studios Apr 2021
*/

class Rectangle {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}

	// getter method definations
	get Area(){
		return this.rectArea();
	}

	//prototype methods
	rectArea() {
		let area = this.height * this.width;
		return area;
	}
}

const square = new Rectangle(4, 4);
console.log(square.Area);