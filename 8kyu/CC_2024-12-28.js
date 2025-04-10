/*

DESCRIPTION:

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Your answer should be accurate within 0.01 kpl.

Some useful associations relevant to this kata:

    1 Imperial Gallon = 4.54609188 litres
    1 Mile = 1.609344 kilometres


*/

function converter(mpg) {
	return +((mpg / 4.54609188 * 1.609344).toFixed(2))
}



/*
ALTERNATIVE SOLUTION:

this solution should be more precise because it performs all 
calculations before rounding, maintaining max precision
when processing any given number
*/

function converter(mpg) {
	return Math.round((mpg / 4.54609188) * 1.609344 * 100) / 100;
}

/*

NOTES:

Number.prototype.toFixed()


- returns a string representing this number using fixed-point notation with the specified number of decimal places
- method of number
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

*/
