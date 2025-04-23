/*

DESCRIPTION:

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


*/

function sumMix(x) {
	let newArr = [];
	for (let i = 0; i < x.length; i++) {
		newArr.push(Number(x[i]));
	}

	return newArr.reduce((prev, curr) => (prev += curr), 0);
}

// ALTERNATIVE SOLUTION

function sumMix(x) {
	return x.map((a) => +a).reduce((a, b) => a + b);
}
