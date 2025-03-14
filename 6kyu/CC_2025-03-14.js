/*

DESCRIPTION:

Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each 
other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = (iterable) => {
return [...iterable].filter((index, element) => element !== element[index -1])
};

/*

NOTES:

PSEUDOCODE

function uniqueInOrder(iterable):
  initialize empty result array
  for each element in iterable:
    if element is different from the last element in result:
      add element to result
  return result


Spread syntax (...)


- Only iterable values, like Array and String, can be spread in array literals and argument lists. 
- [1, ...iterableObj, '4', 'five', 6]
- myFunction(a, ...iterableObj, b)
- { ...obj, key: 'value' }




*/
