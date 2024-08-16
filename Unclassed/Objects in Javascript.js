/*
Lotus Javascript Documentation
Desc: Objects in Javascript
All right reserved lotus code studios Apr 2021
*/


//empty objects
let object = {};

//Using Object Literals
let book = {
	"name": "javascript",
	"target" : "All audiences",
	"pages" : 1098,
	"author": {
		"firstname": "David",
		"lastname": "flanagan"
	}
};   
console.log(book.pages);


//Using Object.create()
let newBook = Object.create(book);
console.log(newBook.name);

//Using the class notation
class classBook {
	constructor(name, target, pages, author){
		this.name = "python";
		this.target = "jun dev";
		this.pages = 1095;
		this.author = ["david", "flanagan"];
	}
}

//initialize with new
let newClassbook = new classBook();
console.log(newClassbook.author[0]);

let arinze = {
    'name': 'Arinze Christopher',
    'age': 28,
    'pay': 40000,
    'job': 'mobile dev'
}

console.log(arinze.name);