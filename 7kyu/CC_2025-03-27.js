/*

DESCRIPTION:

Write a program to determine if a string contains only unique characters. 
Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. 
Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/

const hasUniqueChars = str => new Set(str).size == str.length

// ALTERNATIVE SOLUTION

function hasUniqueChars(str) {
    for (var i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str.charAt(i)) !== i) return false
    }
    
    return true
  } 


/*

NOTES:

Set

- lets you sotre unique values of any type, whether primitice values or object references
- Set objects are collections of values
- a value in the set may ***only occur once***
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

Set.prototype.size

- accessor property of Set instances
- returns the number of unique elements in the set
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size

*/
