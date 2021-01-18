/*
Q: Find the running sum of the array.

*/

let arr = [1, 1, 1, 1, 1];
let outputArr = [];
let sum = 0;

for(let i = 0; i < arr.length; i++){
	sum += arr[i];
    outputArr[outputArr.length] = sum;
}

console.log(outputArr)