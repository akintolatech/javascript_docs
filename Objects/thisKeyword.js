"use strict";

// using this to implicitly declare an object refrence

function identify () {
	return this.name.toUpperCase();
}

function speak() {
	let greeting = "hello, I'm " + identify.call(this);
	console.log(greeting);

}

var me = {
	name: "victor"
};

var you = {
	name: "reader"
};

// calling the identify function with declared objects
// console.log(identify.call(me));
// console.log(identify.call(you));

// console.log(speak.call(me));

//A function that calls itself: relies on lexical scoping 
// an eludes the functionality of this
function foo(num) {
	console.log("foo: "+num);
	foo.count ++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++){
	if (i>5){
		foo(i)
	}
}

// forcing this to point at the foo object
function foo(num) {
	console.log("foo: "+num);
	foo.count ++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++){
	if (i>5){
		foo(i)
	}
}


