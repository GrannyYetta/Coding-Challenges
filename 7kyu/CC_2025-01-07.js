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
