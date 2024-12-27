/*

DESCRIPTION:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples:

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/

function highAndLow(numbers) {
	return (
		Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "))
	);
}

// ALETNATIVELY:

const highAndLow = (numbers, split = numbers.split(" ")) =>
	Math.max(...split) + " " + Math.min(...split);

/*

NOTES:



string.split()

- takes a pattern and divides the string into an ordered list of substrings by searching for the pattern, then puts the 
substrings into an array and returns that array
- add a space in the parenthesis as the separator (first parameter)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

spread operator (...)

- allows a string or an array to be expanded in places where zero or more arguments/elements are expected
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

*/
