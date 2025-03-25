/*

DESCRIPTION:

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"


*/

const toCamelCase = (str) => {
    const words = str.split(' ')
    const camelCaseWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase
    })
    return camelCaseWords.join('')
    
  }


