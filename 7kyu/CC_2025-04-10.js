/*

DESCRIPTION:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

const XO = (str) => {
	let amountOfX = str.match(/x/gi);
	let amountOfO = str.match(/o/gi);

	return (amountOfX && amountOfX.length) == (amountOfO && amountOfO.length);
};

// ALTERNATIVE SOLUTION

function xo(str) {
	str = str.toLowerCase().split("");
	return (
		str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
	);
}

/*

NOTES:

Regular expressions

- # Advanced searching with flags: the i in gi makes the search !!!case-insensitive!!!
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

*/
