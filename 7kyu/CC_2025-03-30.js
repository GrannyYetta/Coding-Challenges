/*

DESCRIPTION:

Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples (input -> output):

* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Enjoy it!!

*/

Array.prototype.remove_ = function(integer_list, values_list){

    return integer_list.filter((e) => !values_list.includes(e))
     
   }

// ALTERNATIVE SOLUTION

   Array.prototype.remove_ = function(integer_list, values_list){
    const resultList = [];
    
    for (let i = 0; i < integer_list.length; i++) {
      if (!values_list.includes(integer_list[i])) {
        resultList.push(integer_list[i]);
      }
    }
    
    return resultList;
  }

  /*

NOTES:

Array.prototype.includes()

- determines whether an array includes a certain value among its entries
- returns true or false
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/
