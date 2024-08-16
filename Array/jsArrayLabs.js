"use strict"
let arr = [1,2,3,4,5];
let sum = 0;


// sums all elements in the array
for(let i = 0; i < arr.length; i++) {
	sum+=arr[i];
}

// console.log(sum);

// split a string and log each word index and its alphabetical representation
let sentence = "The quick brown fox";
let words = [];

// loop through sentence
for(let i = 0; i < sentence.length; ++i) {
	// console.log("word " + i + ":"+ sentence[i]);
	break
}


// Tranverse a string and push each text in a array
for(let i = 0; i < sentence.length; ++i){
	if(sentence[i] == " "){
		continue
	}else{
		words.push(sentence[i]);
	}
	
}

console.log(words);

