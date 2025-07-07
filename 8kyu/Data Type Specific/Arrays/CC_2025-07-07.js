/*

DESCRIPTION:

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.


*/

function arrayPlusArray(arr1, arr2) {
  
  let firstArr = arr1.reduce((acc, curr) => acc + curr)
  let secondArr = arr2.reduce((acc, curr) => acc + curr)
  
  return firstArr + secondArr; 
}

// ALTERNATIVE SOLUTION

/*

NOTES:

*/
