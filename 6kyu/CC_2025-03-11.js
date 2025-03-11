/*

DESCRIPTION:

Write a function that takes an integer as input, and returns the number of bits that 
are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function (n) {
	if (n) {
		return n.toString(2).match(/1/g).length;
	}

	return 0;
};

// ALTERNATIVE SOLUTION

/*

NOTES:

BINARY REPRESENTATION

*To convert any number to its binary representation:
    1. Start with your decimal number.
    2. Divide the number by 2 repeatedly, keeping track of the remainders.
    3. Write down the remainders in reverse order.
    - Example:
        - 13 ÷ 2 = 6 remainder 1
        - 6 ÷ 2 = 3 remainder 0
        - 3 ÷ 2 = 1 remainder 1
        - 1 ÷ 2 = 0 remainder 1


PSEUDOCODE:

function countBits(n):
  convert n to binary string
  initialize a counter
  for each character in the binary string:
    if character is '1', increment counter
  return counter

*/
