/*

DESCRIPTION:

In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/

function findMultiples(integer, limit) {
	return Array.from(
		{ length: parseInt(limit / integer) },
		(_, index) => (index + 1) * integer
	);
}

// ALTERNATIVE SOLUTION

function findMultiples(int, limit) {
	return Array(Math.floor(limit / int))
		.fill(1)
		.map((x, i) => int * (i + 1));
}

/*

NOTES:

Array.prototype.fill()
- changes all elements within a range of indices in an array to a static value
- returns the modified array

*/
