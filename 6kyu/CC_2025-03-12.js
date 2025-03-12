/*

DESCRIPTION:

You are given an array (which will have a length of at least 3, but could be very large) 
containing integers. The array is either entirely comprised of odd integers or entirely 
comprised of even integers except for a single integer N. Write a method that takes the 
array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

*/

function findOutlier(integers){
  
let oddNums = integers.filter(e => e % 2)
let evenNums = integers.filter(e => e % 2 == 0)
  
return oddNums.length == 1 ? oddNums[0] : evenNums[0]
  
}



/*

NOTES:

PSEUDOCODE:

Goal: Find the single even or odd number in an array where all other numbers are of the opposite parity

function findOutlier(integers):
    oddNums = filter all numbers in integers where num % 2 != 0
    evenNums = filter all numbers in integers where num % 2 == 0
    
    if length of oddNums == 1:
        return the first element in oddNums
    else:
        return the first element in evenNums


Array.prototype.filter()

- created a shallow copy of a portion of an array
- the shallow copy is filtered by a callback function, which tests which elements of the array
pass it


*/
