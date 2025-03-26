/*

DESCRIPTION:

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list
 ls and return a list of the sums of its parts as defined above.
Other Examples:

ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270,
                    2581057, 2580168, 2579358, 0]

Notes

    Take a look at performance: some lists have thousands of elements.
    Please ask before translating.



*/

function partsSums(ls) {
	const result = new Array(ls.length + 1);
	result[ls.length] = 0;
	let totalSum = 0;

	for (let i = ls.length - 1; i >= 0; i--) {
		totalSum += ls[i];
		result[i] = totalSum;
	}
	return result;
}

// ALTERNATIVE SOLUTION

function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}

/*

NOTES:


The function needs to calculate the sum of all elements in the list, then progressively remove elements 
from the beginning and recalculate the sum.
Input: An array of numbers
Output: An array of sums, where each sum represents the total of the remaining elements

Instead of recalculating the sum each time, can we use the previous sum to calculate the next one?


PSEUDOCODE

function partsSums(ls):
    Initialize result array with length ls.length + 1
    Set last element of result to 0
    Initialize total sum as 0
    
    For i from ls.length - 1 to 0 (backwards):
        Add ls[i] to total sum
        Set result[i] to total sum
    
    Return result




*/
