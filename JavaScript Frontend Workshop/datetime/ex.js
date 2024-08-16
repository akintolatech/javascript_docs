var today = new Date();
var hour = today.getHours();
var greeting;

if(hour > 18){
    greeting  = "Good Evening !!";
}else if (hour > 12){
    greeting  = "Good afternoon !!";
}else {
    greeting = "Welcome";
}

document.write(`${greeting} the time is ${today.getHours()}:${today.getMinutes()}`)

// example 1
let usr = "Victor";
let note = "Hello We Are the People of Earth";

let message = document.querySelector(".msg");
message.textContent = note;

let user = document.querySelector(".name");
user.textContent = usr;