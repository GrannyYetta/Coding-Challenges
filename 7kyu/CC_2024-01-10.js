/*

DESCRIPTION:

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

*/

const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);

/*

ALTERNATIVE SOLUTION

*/

const getItMiddle = (s) =>{
	s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1)};

/*

NOTES:

Math.ceil()

- static method
- rounds up and returns the smallest integer !!!greater than or equal to!!! a given number
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

String.prototype.slice()

- extracts a seciton of the string and returns it as a new string
- doesn't modify the original string
- slice(indexStart, indexEnd)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

String.prototype.substring()

- method of string
- returns the part of the string from the start index up to and !!!excluding!!! the end index
- substring(indexStart, indexEnd)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

*/
