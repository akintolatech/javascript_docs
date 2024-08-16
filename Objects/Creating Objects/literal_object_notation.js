// Literal Object Notation
"use strict"

//empty objects
let object = {};

//Using Object Literals
let book = {
    // object properties
	"name": "javascript",
	"target" : "All audiences",
	"pages" : 1098,
	"author": {
		"firstname": "David",
		"lastname": "flanagan"
	},

    // object methods
    "summary": function(){
		return (`Name of the book is ${this.name}\nThe number of pages are ${this.pages} written by ${this.author.firstname}`);
	}


};   


console.log(book.summary());