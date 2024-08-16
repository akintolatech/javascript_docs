/* 
	Javascript Objects
	Akintola Technlogies 2024
*/

"use strict"

class Hotel {
	constructor(name, noOfRooms, ratings, bookings){
		this.name = name;
		this.noOfRooms = noOfRooms;
		this.ratings = ratings;
		this.bookings = bookings;
	}

	intel = function(){
		return (
			`Name of hotel is ${this.name}\nThe number of room are ${this.noOfRooms}\nWith ${this.ratings} star ratings and ${this.bookings} Bookings`
		);
	}

	checkBookings = function(){
		if(this.bookings != "none"){
			return("Bookings available");
		}
	}
}

let hydro = new Hotel("hydro", 200);

let shiroro = new Hotel("shiroro", 700, 5, "none");

let elim = new Hotel("Elim Suites", 5000, 4.5, "Available")

console.log(elim.checkBookings())
