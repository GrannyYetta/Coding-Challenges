/* 

DESCRIPTION:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

*/

function stray(numbers) {
	const sort = numbers.sort();

	if (sort[0] != sort[1]) {
		return sort[0];
	}

	return sort[sort.length - 1];
}

/* 

References:

- sort() --> sorts the elements of an array in place and returns the reference to the same array, now sorted.
        The default sort order is ascending (built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

*/
