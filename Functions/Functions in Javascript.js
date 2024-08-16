
"use strict"

// function declarations
function area(width, height){
	let area = width * height;
	return area; 
}

//function expressions]
let areaE = function(width, height){
	let area = width * height;
	return area;
}

//function returns multiple values
function getSize(width, height, depth){
	let area = width * height;
	let volume = width * height * depth;
	let sizes = [area, volume];
	return sizes;
}


//calling the function 
let fFloor = area(4, 4);
console.log(fFloor);

//calling volume size
let spaceArea = getSize(4,4,4)[0];

//calling volume size
let spaceVol = getSize(4,4,4)[1];


console.log(`Total Size----\nArea: ${spaceArea}\nVolume: ${spaceVol}`);

