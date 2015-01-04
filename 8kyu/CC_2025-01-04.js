/*

DESCRIPTION:

Your task is simply to count the total number of lowercase letters in a string.
Examples

"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26

*/

function lowercaseCount (str) {

    const regex = /[a-z]/g

   return (str.match(regex) || []).length
   // If no matches are found in the regex, use an empty array instead!!!

}

/*

NOTES:


RegEx

- the g stands for global 
    - const regex = /foo/g;
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

String.prototype.match()

- matches a string against a regular expression and retrieves those results
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

*/