/*

DESCRIPTION:

You will be given an array of objects (associative arrays in PHP, tables in COBOL) 
representing data about developers who have signed up to attend the next coding meetup
 that you are organising.

Your task is to return an array where each object will have a new property 'greeting'
 with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];

Notes:

    The order of the properties in the objects does not matter (except in COBOL).
    The input array will always be valid and formatted as in the example above.


*/

function greetDevelopers(list) {
    return list.map(item => Object.assign(item, {
       greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`
     }))
    }

// ALTERNATIVE SOLUTION

function greetDevelopers(list) {
    list.forEach(function(developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    
    return list;
  }

  // ALTERNATIVE SOLUTION

  const greetDevelopers = list => list.map(
    dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
  );

/*

NOTES:

Object.assign()

- static method
- copies all enumerable own properties from one or more source objects to a target object
- it assigns properties, versus copying or defining new properties
- returns the modified object
- Syntax: Object.assign(target, source1)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

*/
