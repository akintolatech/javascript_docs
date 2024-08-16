// literal object declaration
let myObj = {
	"name": "adam",
	"sex": "male",
	"age": 22,
	
};


// object access

// property access
let name = myObj["name"];
// console.log(name);


// bracket access
let age = myObj["age"];
// console.log(age**2);

// bracket commit
myObj["job"] = "dev";
// console.log(myObj);

var funcObj = {
	foo: function() {
		// console.log("foo");
		return "foo";
	}
};

let init = funcObj.foo;
console.log(init);
