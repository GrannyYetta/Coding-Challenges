/*

DESCRIPTION:

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *

You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0

*/


// Return the nth triangular number
function triangular( n ) {

    return n > 0 ? ((n * (n + 1)) /2) : 0
}


  /*

  NOTES:

  Triangular Number

  - objects arranged in an equilateral triangle
  - The nth triangular number is the number of dots in the triangular arrangement with n dots
    on each side, and is equal to the sum of the n (from 1 to n)
- Formula:  (n * (n +1) / 2)
- https://en.wikipedia.org/wiki/Triangular_number

  */