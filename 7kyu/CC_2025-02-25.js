/*

DESCRIPTION:

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


*/

function mygcd(x, y) {
	if (x == 0) {
		return y;
	} else {
		return mygcd(y % x, x);
	}
}

/*
ENHANCED SOLUTION (using a ternary operator):
*/

const mygcd = (x, y) => (x == 0 ? y : mygcd(y % x, x));

/*

  NOTES:

  Euclidean algorithm

  - method to compute the greatest common divisor of two integers, i.e. the largest number that 
  divides them both without a remainder
  - factorize both numbers and multiply common prime factors 
  - https://en.wikipedia.org/wiki/Euclidean_algorithm && https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/

  */
