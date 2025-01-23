/* 

DESCRIPTION

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59


working out the logic:

h = 60 min * 60 sec * 1000 ms
m = 60 sec * 1000 ms
s = 1000 ms

*/

function past(h, m, s){
   return (h * 3600000) + (m * 60000) + (s * 1000)
  }