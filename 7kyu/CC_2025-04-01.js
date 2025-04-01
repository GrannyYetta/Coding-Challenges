/*

DESCRIPTION:

Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

*/

function betweenExtremes(numbers) {
    return Math.max(...numbers) -
    Math.min(...numbers)
    }


/*

NOTES:

3 Efficient Ways to Find Maximum Value in JavaScript Arrays

- https://medium.com/@amitsharma_24072/3-efficient-ways-to-find-maximum-value-in-javascript-arrays-515463ebd17

*/
