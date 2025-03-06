/*


DESCRIPTION:

Congratulations! That Special Someone has given you their phone number.

But WAIT, is it a valid number?

Your task is to write a function that verifies whether a given string contains a valid British mobile (cell) phone number or not.

    If the string is a valid UK number, return "In with a chance".

    If it is invalid, or if you're given an empty string, return "Plenty more fish in the sea".

A number can be valid in the following ways:

    Here in the UK, mobile numbers begin with "07" followed by 9 other digits, e.g. "07454876120".

    Sometimes the number is preceded by the country code, the prefix "+44", which replaces the "0" in ‘07’, e.g. "+447454876120".

    And sometimes you will find numbers with dashes in-between digits or on either side, e.g. "+44--745---487-6120" or "-074-54-87-61-20-". As you can see, dashes may be consecutive.

Good Luck Romeo/Juliette!


*/

function validateNumber(str) {
	let regex = /^(\+44|0|-0)?7(-*[0-9]){9}$/;

	return regex.test(str) ? "In with a chance" : "Plenty more fish in the sea";
}

/*

NOTES:

RegExp.prototype.test()

- executes a search with this regular expression for a match between a regular expression and a specified string
- test() can be used to iterate over multiple matches in a string of text (with capture groups)
- Syntax: test(str)
- / and /: These are the delimiters that mark the start and end of the regex
- ^: character matches the beginning of input
- $: matches the end of input
- |: indicates "or"
- ?: Makes the entire group optional 
- -0: Matches a hyphen followed by a zero
- -*: Matches zero or more hyphens
- [0-9]: Matches any single digit from 0 to 9
- {9}: Ensures that exactly 9 repetitions of the grouped pattern occur (this means there must be 9 digits after the leading 7)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

*/
