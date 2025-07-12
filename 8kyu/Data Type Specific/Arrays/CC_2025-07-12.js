/*

DESCRIPTION:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

*/

function findNeedle(haystack) {
  
  let i = haystack.indexOf("needle")
  
  return `found the needle at position ${i}`
  
}


/*

NOTES:

Array.prototype.indexOf()
- returns the first index at which a given element can be found in the array
- returns -1 if a given element cannot be found in the array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

*/
