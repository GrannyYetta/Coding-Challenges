/*

DESCRIPTION:

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example (Input => Output):

35231 => [1,3,2,5,3]
0     => [0]

*/

function digitize(n) {
  
 return n.toString().split('').reverse().map(nString => parseInt(nString))
}

// ALTERNATIVE SOLUTION

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

/*

NOTES:

parseInt()

- parses a string argument 
returns an integer to the specified radix

*/
