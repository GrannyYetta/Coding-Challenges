/*

DESCRIPTION:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples (input --> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"


*/


function maskify(cc) {

return cc.slice(-4).padStart(cc.length, '#')

}



/*

References:

- padStrart() --> method of String values pads this string with another string (multiple times, 
                if needed) until the resulting string reaches the given length. The padding is 
                applied from the start of this string.

- slice() --> array method that returns a shallow copy of a portion of an array into a new array 
            object selected from start to end (end not included) where start and end represent 
            the index of items in that array. The original array will not be modified.



*/