/*

Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

function repeatStr(n, s) {
	let repeat = "";

	for (let i = 1; i <= n; i++) {
		repeat += s;
	}

	return repeat;
}

// ALTERNATIVE:

const repeatStr = (n, s) => s.repeat(n);

/*

NOTES:

Addition assignment (+=)

- addition assignment operator
- adds on the two operands and assigns the result to the left operand
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment

.repeat() method

- string method
- constructs and returns a new string: one that contains the specified number of copies of that same string, all concatenated together
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

*/
