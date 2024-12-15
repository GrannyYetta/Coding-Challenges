/* 

The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap = the amount of people the bus can hold excluding the driver.
    on = the number of people on the bus excluding the driver.
    wait = the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.



working out the logic: 

0 = there is enough space

passenger surplus = cap < wait

wait + on < cap

cap - (on + wait)

return (cap - (on + wait) >= 0) ? "enough space" : ((on + wait) - cap) + ' will be left out' 

*/


function enough(cap, on, wait) {

return Math.max(wait + on - cap, 0)

  }

  /* 

References: Math.max() --> returns the largest of the numbers given as input parameters (or -Infinity if there are no parameters)

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max


  */