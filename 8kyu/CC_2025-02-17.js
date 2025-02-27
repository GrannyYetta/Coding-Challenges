/*

DESCRIPTION:

Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
Examples

(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]

Note

    start < stop
    step > 0
*/

function generateRange(min, max, step) {
	let array = [];
	for (let i = min; i <= max; i += step) {
		array.push(i);
	}
	return array;
}

// ALTERNATIVE:

function generateRange(min, max, step) {
	return Array.from(
		{ length: (max - min) / step + 1 },
		(_, i) => min + i * step
	);
}

/*

NOTES:

in this case I needed the + 1 because step would remain 1 short

Array.from()

- static method
- creates a new, shallow copied array instance from an array or iterable object
- Array.from(arrayLike, mapFn)
- Sequence generator
    - const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from



Array.prototype.map()

- creates a new array  that contains the results of calling a provided funciton on every element in the original array
- map(callbackFn, thisArg) where thisArg is an index
    - the callbackFn is executed fo reach element in the array, generally on the argument that follows, which in this case is the index of the array element
    - The index of the current element being processed in the array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#array

*/
