/*

DESCRIPTION:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"



*/

function alphabetPosition(text) {
    let capitalization = text.toUpperCase()
    let arr = capitalization.split("").map(letter => letter.charCodeAt())
    let newArr = arr.filter(num => {
      if (num > 64 && num < 91) {
        return num
      }
    })
    let lettersIntoNums = newArr.map(num => num - 64)
    return lettersIntoNums.join(' ')
    }

// ALTERNATIVE SOLUTION

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

/*

NOTES:

String.prototype.charCodeAt()

- returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
- Syntax: charCodeAt(index)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

*/
