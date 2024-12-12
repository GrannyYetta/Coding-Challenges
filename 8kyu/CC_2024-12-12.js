/* 
Description:

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

Task:

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

*/

function litres(time) {
	return Math.floor(time * 0.5);
}

/*
  
Description:

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

  */

function countBy(x, n) {
	let z = [];

	for (let i = 1; i <= n; i++) {
		z.push(x * i);
	}

	return z;
}
