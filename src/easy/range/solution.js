range = ((arr) => arr.sort(compareNumbers)[arr.length-1] - arr.sort(compareNumbers)[0])
// I freely admit that I don't quite get yet why THIS works when using a function, even though I know it's imporant because otherwise it'll sort numbers by the first, then second and third position etc.
function compareNumbers(a, b) {
    return a - b;
}