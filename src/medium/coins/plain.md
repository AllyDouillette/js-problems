# Plain English Solution
you have to go from biggest to smallest, and check with modulo how many times this coin fits, e.g. 120 % 100 equals to 20, but 100 % 100 equals to 0. So we're looking to find the maximum number of units of that size (e.g. 100) that we can shove in there, to bring the rest down. Usually that's
Math.roundDown(currentRemaining / coinsize)
substract that from currentRemaining
We can store that information in an object such as

{
    "amount":123
    "100":1
    "50":0
    "20":1
    "5":0
    "2":1
    "1":0
}