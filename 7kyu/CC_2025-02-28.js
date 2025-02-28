/*

DESCRIPTION:

Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

    The format of the strings will always be Europe and JavaScript.
    All data will always be valid and uniform as in the example above.

*/


function countDevelopers(list) {

  let result = 0
  
  for (let i = 0; i <list.length; i++){
    if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
      result ++
    }
    return result
  }
    
  }


/*

NOTES:

*/

/*

DESCRIPTION:

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function accepting 3 arguments (in order):

    left - The current floor of the left elevator
    right - The current floor of the right elevator
    call - The floor that called an elevator

It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"



*/


function elevator(left, right, call){
return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"
}



/*

NOTES:

- static method
-  returns the absolute value of a number
- Syntax: Math.abs(x)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

*/