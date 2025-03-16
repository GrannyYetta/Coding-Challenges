/*

DESCRIPTION:

A pangram is a sentence that contains every single letter of the alphabet
 at least once. For example, the sentence "The quick brown fox jumps over the 
 lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, 
False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g)
    
    return new Set(letters).size === 26
    
    
    }

  /*

NOTES:

- The Set object lets you store unique values of any type, whether primitive 
values or object references.
- 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

*/
