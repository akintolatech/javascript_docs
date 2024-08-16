
/*
Lotus Javascript Documentation
Desc: Regular expressions
All right reserved lotus code studios Apr 2021
*/

"use strict"

//indexOf string method:returns the index of the string argument passed
let textx = "the white rabbit";
let x = textx.indexOf("te");
// console.log(x);


//testing for digits in string

// pattern declaration 1
let pattern = /[0-9]/;	 //[0-9] === \d

//pattern declaration2
let regExpPattern = new RegExp("[0-9]")
let text = "lola34";

//testing pattern matches
// console.log(pattern.test(text));

//testing for binary numbers
let binary = 1001101;
let binaryPattern = /[^0-1]/;			//the caret ^ negates the pattern
let binaryMatch = binaryPattern.test(binary);
// console.log(binaryMatch);

//testing for repetitions
let repetitions = "akintola";
let repeatPattern = /\d{2}/;

console.log(repeatPattern.test(repetitions));

//testing for dates
let datePattern = /\d-\d{1,2}-\d{4} \d{1}:\d{2}/;
let dateText = "1-30-2003 8:45";
console.log(datePattern.test(dateText));



