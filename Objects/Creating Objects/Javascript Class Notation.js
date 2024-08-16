/*
Lotus Javascript Documentation
Desc: Class Notation
All right reserved Akintola Tchnologies Apr 2021 updt Aug 24
*/

class Person{

	constructor (name, age, pag, job) {
		this.name = name;
		this.age = age;
		this.pay = pay;
		this.job = job;	
	}

	//Methods
	personData = function() {
		return `Name: ${this.name}\nAge: ${this.age}\n"Pay: ${this.pay}\nJob: ${this.job}\n`; 
	}

}

// Instantiate
let adam = new Person ("Adam Smith", 47, 5000, "Developer");
console.log(adam.personData());