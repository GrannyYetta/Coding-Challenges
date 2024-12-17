/*

DESCRIPTION:

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Your function should only return a number, not the explanation about how you get that number.

*/

function getSum(a, b)
{
let max = Math.max(a, b)
let min = Math.min(a, b)
    return (max - min + 1) * (max + min) /2
  
}



/*

References:

Sum of Integers Formula:

S = n(a + l)/2

where,

    S = sum of the consecutive integers
    n = number of integers
    a = first term
    l = last term


    https://www.cuemath.com/sum-of-integers-formula/

    Math.max() --> returns the largest of the numbers given as input parameters (or -Infinity if there are no parameters)

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    Math.min() --> returns the smallest of the numbers given as input parameters (or Infinity if there are no parameters)

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

*/