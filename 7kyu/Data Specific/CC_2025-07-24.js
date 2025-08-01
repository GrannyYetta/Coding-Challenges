/*

DESCRIPTION:

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

*/

const binaryArrayToNumber = arr => {

  return parseInt(arr.join(''), 2)
};

// ALTERNATIVE SOLUTION

const binaryArrayToNumbers = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

/*

NOTES:

parseInt()
- parses a string argument and returns an integer of the specified radix

The second argument, 2, means "interpret this string as a base-2 (binary) number." --> so .parseInt() turns the binary string into its decimal equivalent



*/
