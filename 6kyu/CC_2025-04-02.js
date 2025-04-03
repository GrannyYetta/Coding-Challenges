/*

DESCRIPTION:

In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

    7 has 3 on bits (000...0111)
    6 has 2 on bits (000...0110)
    15 has 4 on bits (000...1111)
    8 has 1 on bit (000...1000)

So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write a function that takes an array of integers and sort them as described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

*/

function sortByBit(arr) {
	const countBits = (number) => {
		return (number.toString(2).match(/1/g) || []).length;
	};

	arr.sort((a, b) => {
		const bitCountA = countBits(a);
		const bitCountB = countBits(b);
		return bitCountA - bitCountB || a - b;
	});
	return arr;
}

// ALTERNATIVE SOLUTION

const sortByBit = (arr) =>
	arr.sort(
		(a, b) =>
			a.toString(2).replace(/0/g, "") - b.toString(2).replace(/0/g, "") || a - b
	);

/*

NOTES:

Array.prototype.sort()

- sorts the elements of an array in place
- returns the reference to the same array, now sorted
- the default sort order is ascending
    - built upon converting the elements into strings, 
    - then comparing their sequence of UTF-code unit values
- Syntax: sort(compareFn)





Pseudocode

FUNCTION sortByBitCount(array):
    FUNCTION countBits(number):
        // Convert number to binary string and count '1's
        RETURN (number.toString(2).match(/1/g) || []).length

    FUNCTION compare(a, b):
        bitCountA = countBits(a)
        bitCountB = countBits(b)
        IF bitCountA < bitCountB:
            RETURN -1
        ELSE IF bitCountA > bitCountB:
            RETURN 1
        ELSE:
            // Compare actual values if bit counts are equal
            RETURN a - b

    // Perform in-place sort using the custom comparator
    array.sort(compare)
    RETURN array


*/
