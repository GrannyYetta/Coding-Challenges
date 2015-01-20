/*

Description:

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

const getAverage = (marks) => {
	return Math.floor(
		marks.reduce((a, b) => {
			return a + b;
		}, 0) / marks.length
	);
};

/*

References:

- .reduce() --> transforms an array into a single value by iterating over its elements. 
                Processes each element of an array and combines them into a single output value.

                array.reduce(callback, initialValue);

                It takes a callback function that takes 4 parameters:
                    - accumulator: The accumulated value from the previous iteration.
                    - currentValue: The current element being processed in the array.
                    - currentIndex (optional): The index of the current element.
                    - array (optional): The original array being processed.
    
                For each element in the array, reduce calls the callback function with the 
                current accumulator and current value and the return value from the callback 
                becomes the new accumulator for the next iteration.

*/
