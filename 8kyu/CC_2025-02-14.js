/*

DESCRIPTION:

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


*/

function divisibleBy(numbers, divisor) {
	return numbers.filter((n) => n % divisor === 0);
}


// ALTERNATIVE:

function divisibleBy (numbers, divisor) {

    let newArray = []

    numbers.map((n) => {
        if (n % divisor === 0) {
            newArray.push(n)
        }
    })

    return newArray

}

/*

NOTES:

filter method

- array method
- creates a new shallow copy of a portion of a given array, filtered down to just the elements
 from the given array that pass the test implemented by the provided (callback) function
 - callback function: executes for each element in the array
 - should return a truthy value to keep the element in the resulting array
- Syntax: filter(callbackFn, thisArg)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/