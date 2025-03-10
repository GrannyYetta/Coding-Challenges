/*

DESCRIPTION:

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all 
positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 
throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or 
RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here (https://www.wikiwand.com/en/articles/Factorial) .


*/

function factorial(n) {
	if (n < 0 || n > 12) {
		throw new RangeError();
	} else if (n < 1) {
		return 1;
	} else {
	return	n * factorial(--n);
	}
}

/*

NOTES:


RangeError

- indicates an error when a value is not in the set/range of allowed values
- throw new RangeError("")
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

Recursion

- a function calling itself
- used to solve problems that contain smaller sub-problems
- receives two inputs: a base case (ends recursion) or a recursive case (resumes recursion)
- https://developer.mozilla.org/en-US/docs/Glossary/Recursion



I cried with this one.

*/
