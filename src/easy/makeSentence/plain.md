# Plain English Solution
Slice the string into the first letter and the remaining part. Transform the first string to Uppercase.
Check the last position of the remaining string whether it equals either ., !, or ? (or what else counts as punctuation – might be convenient to store all ending positions in an array)
anyway, check whether the last position is in the collection of "doesn't need a stop" and if not, tack on a "." with string merge (+ Operator)