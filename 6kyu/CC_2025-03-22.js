/*

DESCRIPTION:

Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns 
the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The
 length of the array will always be at least 2.

The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

*/

function findMissingLetter(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let currentLetter = array[i].charCodeAt(0);
		let nextLetter = array[i + 1].charCodeAt(0);
		if (nextLetter - currentLetter > 1) {
			return String.fromCharCode(currentLetter + 1);
		}
	}
}

// ALTERNATIVE SOLUTION

function findMissingLetter(array) {
	let codes = array.map((e) => e.charCodeAt());

	for (let i = 0; i < codes.length; i++) {
		if (codes[i] + 1 !== codes[i + 1]) {
			return String.fromCharCode(codes[i] + 1);
		}
	}
}

/*

NOTES:

String.prototype.charCodeAt()

- returns an integer between 0 and 65535, which represent the UTF-16 code unit at the given index
- always indexes the string as a sequence of UTF-16 code units (which means it could return lone
surrogates??)
- For any two consecutive letters in the array, their ASCII values should differ by exactly 1,
so if the difference between them is bigger than 1, then that is the missing letter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

String.fromCharCode() 

- method to convert a UTF-16 code unit value back into a character
- static method that returns a string created from the specified sequence of UTF-16 code units
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


*/
