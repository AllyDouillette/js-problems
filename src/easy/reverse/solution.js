// reverse is gonna be the variable containing the result.
// reverse = () 
// inside the brakets is the routine.
// reverse = (WHAT SHALL I DO FATHER)
// the routing takes parameters instead of just running w/o them
//reverse = ( (str) => (ROUTINE INCL. RESULT))

reverse = ((str) => {
    reverse = ""    // empty reverse first
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
})