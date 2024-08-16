/*
Lotus Javascript Documentation
Desc: Class Notationnode
All right reserved lotus code studios Apr 2021
*/

class Person(name, age, pay, job){
	this.name = name;
	this.age = age;
	this.pay = pay;
	this.job = job;

	//Methods
	function print(){
		console.log("Name: ${}\nAge: ${}\nPay: ${}\nJob: ${}\n");
		return "Name: ${}\nAge: ${}\nPay: ${}\nJob: ${}\n";
	}

}

//Initialization
let alice = Person("alice", 19, 4000, "dev");
console.log(alice);
