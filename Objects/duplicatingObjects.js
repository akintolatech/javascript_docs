function anotherFunc(){

	var anotherObj = {
		c: true
	};

	var anotherArray = [];

	var myObj = {
		a: 2,
		b: anotherObj,
		c: anotherFunc
	};

};


// property descriptors
anotherObj = {"name":"dave", "age":20};
let myObj = {
		a: 2,
		b: anotherObj,
	};

console.log(myObj.getOwnPropertyDescriptor( myObj, "a"));