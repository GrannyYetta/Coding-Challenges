/*

DESCRIPTION:

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

function squareDigits(num) {
	return +String(num)
		.split("")
		.map((e) => e ** 2)
		.join("");
}


/*

NOTES:

Unary plus operator

- converts non-numbers to numbers (if the operand isn't already)
- placed before the operand
- not to be confused with the Number constructor
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus

String() constructor

- creates string objects
- when called as a function (without new), it returns a sring primitive
- when called as a constructor (with new), it returns a string object (not primitive)
- not to be confused with toString() !!!
- 


string.split()

- turns a string into an array of characters [""]
- method of String values
- returns an array
- searches for a pattern
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

array.join()

- array method
- creates and returns a new string by concatenating all of the elements in an array separated by commas or a specified separator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

.map()

- array method
- creates a new array populated with the results of calling a callback function on every element in the calling array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/