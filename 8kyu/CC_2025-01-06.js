/*

DESCRIPTION:



Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

Examples:

n = 1 should return 1
n = 5 should return 101
n = 11 should return 1011


*/

function toBinary(n) {

return +n.toString(2)

}


/*

Number.prototype.toString()

- toString(radix)
- radix: an integer in the range 2 through 36 specifying the base to use for representing the number value
    - defaults to 10
    - in the arithmetical sense, radix stands for the base number
    - the base number for binary is 2 bc it represents the two possibilities: 0 and 1
    -https://en.wikipedia.org/wiki/Radix
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString


*/