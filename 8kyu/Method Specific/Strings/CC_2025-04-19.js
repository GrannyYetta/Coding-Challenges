/*

DESCRIPTION:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

const removeExclamationMarks = (s) => {
	return s.replace(/\!/g, "");
};

// ALTERNATIVE SOLUTION

function removeExclamationMarks(s) {
	let finalString = "";

	for (let i = 0; i <= s.length; i++) {
		if (s[i] !== "!") {
			finalString += s[i];
		}
	}

	return finalString;
}

/*

NOTES:

Regular expressions

\ --> Indicates that the specified character should be treated specially or "escaped"

*/
