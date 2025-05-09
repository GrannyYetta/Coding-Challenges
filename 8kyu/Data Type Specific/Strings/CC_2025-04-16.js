/*

DESCRIPTION:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name){
  
    const separate = name.split(' ')
    
    const firstInitial = separate[0].charAt(0).toUpperCase()
    
    const secondInitial = separate[1].charAt(0).toUpperCase()
    
    return firstInitial + "." + secondInitial
    
    }


// ALTERNATIVE SOLUTION

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}