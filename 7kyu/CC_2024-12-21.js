/*

DESCRIPTION:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    
    let counter = 0
  
    for (let i = 0; i < str.length; i++) {
      
      if (vowels.includes(str[i])) {
        counter ++
      }
      
    }
    
    return counter
    
  }



/*

Refereces:

- .includes() ---> The includes() method of String values performs 
                    a case-sensitive search to determine whether a given string may be found 
                    within this string, returning true or false as appropriate.

*/