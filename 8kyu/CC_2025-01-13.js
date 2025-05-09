/*

DESCRIPTION:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!


*/

function fixTheMeerkat(arr) {
	return arr.slice().reverse();
}

/*

NOTES:

Reverse method

- Array method
- Returns elements in the opposite order or direction to that of that previously stated
- Al revés voltea'o


- Not to be confused with toReversed(), which reverses the elements in an array without mutating the original array

*/
