/* 

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

Where x <= 1000 and y <=1000

Task:

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) will be given. 

*/

/* 

Working out the logic:

heads = chickens + cows
    chickens = heads - cows

legs = 2chickens + 4cows
     = 2(heads - cows) + 4cows
     = 2heads - 2cows + 4cows
     = 2heads + 2cows

2cows = legs - 2heads

cows = (legs / 2) - heads

*/

function animals(heads, legs) {
	const cows = legs / 2 - heads;
	const chickens = heads - cows;

if ( cows < 0 || chickens < 0 || !Number.isInteger(cows) || !Number.isInteger(chickens)) {
return 'No solutions'
}

return [chickens, cows]
}

/* 

References:

MDN - Numebr.isInteger() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

*/ 