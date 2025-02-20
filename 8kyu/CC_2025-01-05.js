/*

DESCRIPTION:

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes

The input array will always contain only positive numbers, and will never be empty or null.


*/

function squareOrSquareRoot (array) {
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            array[i] = Math.sqrt(array[i])
        } else {
            array[i] = Math.pow(array[i], 2)
        }
    }
    return array
}

// ALTERNATIVE SOLUTION:


function squareOrSquareRoot(array) {
  return array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))
  }



  /*

  NOTES:

  Math.sqrt()

  - static method
  - retunrs the square root of a number
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

  Math.pow()

  - static method
  - returns the value of a base raised to a power
  - Math.pow(base, exponent)
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

  */