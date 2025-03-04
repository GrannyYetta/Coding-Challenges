/*

DESCRIPTION:

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Sum of prime-indexed elements

Sum of integer combinations


*/

function repeats(arr) {
	let sum = 0;

	arr.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < arr.length; i += 2) {
		if (arr[i] !== arr[i + 1]) {
			sum += arr[i];
			i--;
		}
	}
	return sum;
}

/*

ALTERNATIVE SOLUTION:

*/

function repeats(arr) {
	return arr
		.filter((x) => arr.indexOf(x) === arr.lastIntexOf(x))
		.reduce((a, b) => a + b);
}

/*

NOTES:

Array.prototype.reduce()

- suplies a reducer callback funciton on each element of the array
- it does so in order
- passes in the return value from the calculation of the preceding element
- the final result of funning the reducer function on all elements of the array is a single number
- reduce(callbackFn, initialValue)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


Array.prototype.indexOf()

- returns the first index at which a given element can be found in the array, or -1 if it is not present
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

Array.prototype.lastIndexOf()

- returns the last index at which a given element can be found in the array, or -1 if it is not present
- the element is searched backwards, starting at ```fromIndex```
- lastIndexOf(searchElement, fromIndex)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

*/
