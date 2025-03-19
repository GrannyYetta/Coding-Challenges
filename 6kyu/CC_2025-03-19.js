/*

DESCRIPTION:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string (https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
    Find The Unique (https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)

*/


function findUniq(arr) {
   const set = new Set(arr)
   return arr.find( num => arr.indexOf(num) === arr.lastIndexOf(num))
  }
  

/*

NOTES:

Set

- the Set object lets me store unique values of any type (primitice or object references)
- in this case, it automatically remoces duplicates
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

Array.prototype.find()

- used in this case to return the first element that satisfies the condition -->
checking if the first occurence of the number (indexOf) is also its last occurence (lastIndexOf),
which is only true for the unique number
- returns the first element in the provided array that satisfies the provided condition
 (testing function)
- If you need to find the index of a value, use indexOf(). (It's similar to findIndex(),
 but checks each element for equality with the value instead of using a testing function.)
 - find(callbackFn)
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

*/

