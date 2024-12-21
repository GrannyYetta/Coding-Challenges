/*

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

function reverseWords(str) {

	return str.split(" ").reverse().join(" ");
}

/*

References:

- .split() --> takes a pattern and divides this string into an ordered list of substrings 
                by searching for the pattern, puts these substrings into an array, and 
                returns the array.
            - string method

- .reverse() --> reverses an array in place and returns the reference to the same 
                    array, the first array element now becoming the last, and the last array 
                    element becoming the first.
                - array method

- .join()  --> creates and returns a new string by concatenating all of the elements 
                in this array, separated by commas or a specified separator string.
                - If the array has only one item, then that item will be returned 
                without using the separator!!!!
            - array method

*/
