/*
Lotus Javascript Documentation
Desc: Loops in Javascript
All right reserved lotus code studios May 2021
*/

// while loops
var count = 0;
while(count < 10){
	count = count + 1;
	// console.log("added");
}
// console.log(count);

//do while loops... more research needed

//for loops
for(var count = 0; count < 10; count++){
	// console.log(`Count is: [${count}]`);
};

//complex examples
var i, j;
for(i = 0,j=0; i < 10; i++, j--){
	var sum = i * j;
	// console.log(sum)
}

//Transversing an array
var array = [1,3,6,7];
for(var count = 0; count < array.length; count++){
	console.log(array[count]);
};

console.log("\n");

for(p in array){
	console.log(array[p]);
}
