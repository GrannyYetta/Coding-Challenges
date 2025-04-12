/*

DESCRIPTION:

Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

*/

function noSpace(x){

return x.replace(/ /g, '')
  
}


// ALTERNATIVE SOLUTION

function noSpace(x){
  
    return x.split(' ').join('')
  
  }

/*

NOTES:

String.prototype.replace()

- returns a new string with one, some or all matches ofa pattern replaced by a replacement
- the pattern can be a string or a regex
- the replacement can be a string or a function called for each match
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


*/
