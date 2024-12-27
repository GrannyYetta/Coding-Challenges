/*

DESCRIPTION:

It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one parameter, 
the original string. You don't have to worry about strings with less than two characters.

*/

function removeChar(str) {
	return str.slice(1, -1);
}


/*

NOTES:

.slice()

- extracts a section of a string and returns a new string without modifying the original one
- slice(indexStart, indexEnd)
- slice(indexStart, indexEnd)
    - indexStart = index of the first character *to be included* in the returned string
    - indexEnd = index of the first character *to be excluded* from the returned substring
- string method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- but is also an array method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- 


*/