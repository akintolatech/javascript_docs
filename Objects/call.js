function baz(){

	// call-stack is: `baz`
	// so, our call-site is in the global scope
	console.log("Baz");

	// call site for func baz
	baz();
}

function bar() {
	// call-stack is: baz -> bar
	// call site is in baz
	console.log("bar");
	foo();
}

function foo(){
	// call-stack is: `baz` -> `bar` -> `foo`
	// so, our call-site is in `bar`
	console.log("foo");
}

// call site for baz
baz();