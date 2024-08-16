/*
Lotus Javascript Documentation
Desc: Class inheritance: extends
All right reserved lotus code studios Apr 2021
*/

"using strict"

//parent class
class Animal {
	constructor(name, sound="nil") {
		this.name = name;
		this.sound = sound;
	}
	speak(){
		return(`${this.name} makes this sound`);
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
	}
}

// instantiating animal class
let bird = new Animal("bird", "tweet");
console.log(bird.speak());


let dog = new Dog("dennis");
//extends provide inheritance function: you can invoke the speak function
//even if its not declared in the classs defination
console.log(dog.speak());