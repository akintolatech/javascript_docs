"use strict"


// Array declarations
// using square brackets
var myArray = ["alice", "bob", "chris", "gold"];

// using the Array constructor
var ourArray = new Array(1,2,3,4);

// shallow copy-changes made to the original effect a change in the shallow array
let shallowArray = myArray;

// deep array copy - changes made to the 
// original array does not have any effect
function deepCopy(arr1, arr2){
	let dArr = []
	for(let i = 0; i < arr1.length; ++i) {
		arr2[i] = arr1[i];
		dArr.push(arr2[i]);
	}
	return dArr;
}

// deep copy operation
let deepArray = [];
let x = deepCopy (myArray, deepArray);


console.log();

// aggregate array operations






