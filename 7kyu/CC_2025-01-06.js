/*

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]


*/

function fizzbuzz(n) {
	let newArray = [];

	for (let i = 1; i <= n; i++) {
		if (i % 15 == 0) {
			newArray.push("FizzBuzz");
		} else if (i % 3 == 0) {
			newArray.push("Fizz");
		} else if (i % 5 == 0) {
			newArray.push("Buzz");
		} else {
			newArray.push(i);
		}
	}
	return newArray;
}

// ALTERNATIVE:

const fizzbuzz = (n) =>
	Array.from({ length: n }, (_, i) => i + 1).map((e) =>
		e % 15 == 0 ? "FizzBuzz" : e % 5 == 0 ? "Buzz" : e % 3 == 0 ? "Fizz" : e
	);

/*

NOTES:

The order of elimination in the if/else/if statement matters!!! 

*/
