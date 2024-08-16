/*
Lotus Javascript Documentation
Desc: Class Notation
All right reserved lotus code studios Apr 2021
*/
"use strict"

class Person {
	//prototype methods
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	//getter methods
	get print(){
		return (`${this.name} is ${this.age} years old`);
	}
}

// class instantiation
const ali = new Person("Ali", 67);
console.log(ali.print);