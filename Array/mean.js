var arr = [96, 62, 80, 44, 80];
var arrLen = arr.length;
//find sum of array 
var sum = arr.reduce((a, b) => a + b, 0);

//derive mean
var mean = sum / arrLen
console.log(mean);