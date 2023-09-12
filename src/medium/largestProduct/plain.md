# Plain English Solution
if the product of x adjacent values is the biggest, its SUM will also be the biggest, at least I think so? (nope, 0 is the party pooper)
we can use this to keep computing power down because we need to go through the array and calculate basically the sum of the four
within the loop it's
- slice your four or x digits out
- make an array out of it
- IF THERE IS NO 0:
- calc sum
- if that sum is bigger than the one you've known before, store the index (position) because we'll need that one again
- if sum is x times 9 just stop after that iteration