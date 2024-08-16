// Constructor Object Notation
"use strict"

// object constructor
let cart = new Object();
// add properties
cart.name = "groceries";
cart.items = ["Bread 50", "Milk 20", "Eggs 40"];
cart.total = 34;
cart.loc = "usa"
cart.returnName = function () {
    return this.name
}

console.log(cart);
console.log(cart.returnName())

// updating using dot notation
cart.total = 60;
// updating using indexed access operator
cart["name"] = "market items";
console.log("After property update\n", cart);

// deleting a property
delete cart.loc;
console.log("After property deletion\n", cart);
