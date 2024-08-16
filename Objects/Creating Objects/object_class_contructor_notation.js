"use strict"


class Hotel {
	constructor(name, noOfRooms, ratings, bookings){
		this.name = name;
		this.noOfRooms = noOfRooms;
		this.ratings = ratings;
		this.bookings = bookings;
	}

	intel = function(){
		return (`Name of hotel is ${this.name}\n The number of room are ${this.noOfRooms}`);
	}


}

let hydro = new Hotel("hydro", 200);

let shiroro = new Hotel("shiror0", 700, 5, "none");

console.log(shiroro.intel())
