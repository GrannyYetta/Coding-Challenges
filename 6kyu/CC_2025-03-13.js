
/*

DESCRIPTION:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples:

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


*/


function toCamelCase(str) {
    const words = str.split(/[-_]/);
    
    return words.map((word, index) => {
        if (index === 0) {
          return word
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}
// ALTERNATIVE SOLUTION

/*

NOTES:

PSEUDOCODE

function toCamelCase(str):
    split the input string into words using '-' or '_' as delimiters
    process each word:
        keep the first word unchanged
        capitalize the first letter of subsequent words and lowercase the rest of the word
    join all words into a single string
    return the result



String.prototype.split()

- takes a pattern and divides this string into an ordered list of substrings by searching for a pattern
- the substrings are then placed into an array (the return)
- Syntax: split(separator)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

String.prototype.charAt()

- takes an index as input
- returns the character at that position in the string
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


String.prototype.toUpperCase()

- returns the inputed string converted to uppercase
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Array.prototype.slice()

- returns a shallow copy of a portion of an array into a new array object selected from start to end (not including the end)
- start and end are the indexes of items in that array
- the original array is not modified
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


*/




























/*

WARINING: 

ORIGINALLY I WAS UNDER THE IMPRESSION THIS WAS A 6KYU AND IT TURNED OUT TO BE (UNSURPRISINGLY SO) AN 8KYU. HENCE THE REDO ABOVE.

DESCRIPTION:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

function booleanToString(b) {
	return b.toString();
}

// ALTERNATIVE SOLUTION:

function booleanToString(b){
    return `${b}`
  }

// ANOTHER ALTERNATIVE SOLUTION:
  const booleanToString = b => b ? 'true' : 'false';

/*

NOTES:

This one felt like a joke...

*/
