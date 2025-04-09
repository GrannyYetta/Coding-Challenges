
/*

DESCRIPTION:

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
    }
                 
      

// ALTERNATIVE SOLUTION

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
  }


// ALTERNATIVE SOLUTION



  const solution = (string) => {
    return string.split('')
      .map(letter => letter == letter.toUpperCase() ? letter = ` ${letter}` : letter)
      .join('')
  }

/*

NOTES:



*/
