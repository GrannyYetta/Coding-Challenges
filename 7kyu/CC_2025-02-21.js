/*

DESCRIPTION

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'


*/

function removeDuplicateWords(s) {
	let result = new Set(s.split(" "));
	return [...result].join(" ");
}

// SHORTENED VERSION:

function removeDuplicateWords() {
	return [...new Set(s.split(" "))].join(" ");
}


/*

NOTES:

new Set()

- creates a Set object form the array of words that can only store unique values
- that means that when you create a new Set from an array, it automatically removes any duplicate values
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

*/