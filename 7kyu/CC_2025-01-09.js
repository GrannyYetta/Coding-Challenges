/*

DESCRIPTION:

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
Examples

{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

  const myLanguages = results => Object.keys(results).filter((language) => results[language] >= 60).sort((language1, language2) => results[language2] - results[language1])

  /*

NOTES:

Object.keys()

- static method
- returns an array of a given object's enumerable string-keyed property names
- Syntax: Object.keys(obj)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

  */