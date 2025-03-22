/*

DESCRIPTION:

Define a function that takes an integer argument and returns a logical value true or false 
depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has 
no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers 
    as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the 
    most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending 
    on language ). Looping all the way up to n, or n/2, will be too slow.

Example

is_prime(1) -->  false 
is_prime(2) -->  true  
is_prime(-1) --> false 

*/

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	if (num === 2) {
		return true;
	}

	if (num % 2 == 0) {
		return false;
	}

	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}


// ALTERNATIVE SOLUTIONs

function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

/*

NOTES:

if n <= 1 --> false bc numbers smaller than or equal to 1 are not prime
if n == 2 --> true bc 2 is the smallest prime number
if n is even --> false because even numbers greater than 2 are not prime
so the iteration hast to start from 3 to the square root of n
  if n is divisible by i --> false

return true --> if we've made it here, n is most centainly prime

*/
