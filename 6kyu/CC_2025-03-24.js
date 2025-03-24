/*

DESCRIPTION:

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. 
For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

function expandedForm(num) {
	const str = num.toString().split(""); // also doable by [...num + '']
	const arr = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== "0") {
			let placeValue = 10 ** (str.length - 1 - i);
			arr.push((parseInt(str[i]) * placeValue).toString());
		}
	}
	return arr.join(" + ");
}

// ALTERNATIVE SOLUTION using forEach()

function expandedForm(num) {
	let str = [...(num + "")];
	let arr = [];

	str.forEach((e, i) => {
		if (e !== "0") {
			const placeValue = 10 ** (str.length - 1 - i);
			arr.push(e * placeValue);
		}
	});
	return arr.join(" + ");
}

// ALTERNATIVE SOLUTION - elegant?

const expandedForm = (n) =>
	n
		.toString()
		.split("")
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter((a) => a > 0)
		.reverse()
		.join(" + ");

/*

NOTES:

function expandedForm(num):
    Convert num to string
    Initialize empty result array
    
    For each digit in the number string (from left to right):
        If digit is not zero:
            Multiply digit by its place value (1, 10, 100, etc.)
            Add this value as a string to the result array
    
    Join the result array with " + " between elements
    Return the joined string



Array.prototype.forEach()

- instances executes a provided function once for each array element
- Syntax: forEach(callbackFn) or forEach(callbackFn, thisArg)
- 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/
