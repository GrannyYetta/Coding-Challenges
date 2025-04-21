/*

DESCRIPTION:

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.


*/

function check(a, x) {
	return a.includes(x) ? true : false;
}

// ALTERNATIVE SOLUTION

const check = (a, x) => a.includes(x);

// ALTERNATIVE SOLUTION

function check(a, x) {
	return a.indexOf(x) >= 0;
}

/*

NOTES:

Array.prototype.indexOf()

- returns the first index at which a given element can be found in the array, or -1 if it is not present


*/
