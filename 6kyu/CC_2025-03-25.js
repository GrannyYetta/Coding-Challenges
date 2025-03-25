/*

DESCRIPTION:

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"


*/
String.prototype.camelCase = function () {
	if (this.trim() === "") {
		return "";
	}

	return this.trim()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
};

// ALTERNATIVE SOLUTION


String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s)(\w)/g, (_, $1) => $1.toUpperCase());
  };