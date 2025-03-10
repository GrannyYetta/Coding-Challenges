/*

DESCRIPTION:


Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than 
one digit, continue reducing in this way until a single-digit number 
is produced. The input will be a non-negative integer.

Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digital_root(n) {
    return n < 10
    ? n
    : digitalRoot((n + '').split('').reduce((acc,val) => acc + +val, 0))
  }


/*

NOTES:

PSEUDOCODE
-function digitalRoot(n){
while n has more than one digit:
    split n into its digits
    sum the digits
    set n to the sum
return n
}

Array.prototype.reduce()

- executes a user-suplied "reducer" callback function on each element of the array, in order
- that function passes in the return value from the calculation on the preceding element
- the final result of running a reducer across the elements of the array is a single value
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/

  // ALTERNATIVE SOLUTION

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

  /*

NOTES:

- It's based on a mathematical property of digital roots: the digital root of a number is congruent to the number modulo 9
- Subtracting 1 and then adding 1 at the end handles the case when n is a multiple of 9
- Examples:
    - For 16: (16 - 1) % 9 + 1 = 15 % 9 + 1 = 6 + 1 = 7
    - For 942: (942 - 1) % 9 + 1 = 941 % 9 + 1 = 5 + 1 = 6
- When n is 0, it returns 0
- When n is a multiple of 9, it correctly returns 9 instead of 0
- This method is much faster than the iterative or recursive approaches, as it calculates
 the result in a single operation, regardless of how large the input number is

*/
