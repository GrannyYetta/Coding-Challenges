/*

DESCRIPTION:

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.


*/

function findAverage(array) {
 
  if (array.length === 0)
{
  return 0
}  
  
  let sum = array.reduce((acc, curr) => acc + curr)
 
  return sum /array.length;
}

// ALTERNATIVE SOLUTION

/*

NOTES:

*/
