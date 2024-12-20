/*

DESCRIPTION:

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Examples:

divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"


*/

function divisors(integer) {
  
    const divisorsArray = []
    
    for (let i = 2; i < integer; i++) {
      if (integer % i=== 0){
        divisorsArray.push(i)
      }
    }
    
    if (divisorsArray.length === 0) {
      return `${integer} is prime`
    }
    return divisorsArray
    
  }

  /*

  References:

  -Remainder (%) --> The remainder (%) operator returns the remainder left over 
                    when one operand is divided by a second operand. It always 
                    takes the sign of the dividend.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

  */