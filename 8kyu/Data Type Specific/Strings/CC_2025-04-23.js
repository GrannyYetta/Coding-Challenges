


/*

DESCRIPTION:

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!


*/

function doubleChar(str) {
    let result = "";
    for (let char of str) {
      result += char + char;
    }
    return result;
  }

// ALTERNATIVE SOLUTION

const doubleChar = (str) => str.split("").map(c => c + c).join("");

/*

NOTES:

*/











/*

DESCRIPTION:

Summation

Write a program that finds the summation of every number from 1 to num (both inclusive).
 The number will always be a positive integer greater than 0. Your function only needs to
return the result, what is shown between parentheses in the example below is how you reach 
that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



*/

var summation = function (num) {
    return num * (1 + num) / 2
    }

// ALTERNATIVE SOLUTION

var summation = function (num) {
    let i = 1, s=1;
    while(i++<num) {s+=i}
    return s
  }

/*

NOTES:



Sum of Integers Formula

S = n(a + l)/2

where,

    S = sum of the consecutive integers
    n = number of integers
    a = first term
    l = last term


https://www.cuemath.com/sum-of-integers-formula/

*/
