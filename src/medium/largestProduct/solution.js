number = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

console.log(number.split("0").length)
const splitByZeroes=number.split("0")
// this is the array SPLIT BY ZEROES.
// we do this because then a substring has to be longer or equal to 13 for us to properly care about it, because a substring with e.g. 8 positions that borders on a zero will equal 0 in multiplication.
// I'm assuming this cuts down the hassle enormously
// let's check how many substrings fill the criteria!

let count = 0
for (let i = 0; i < splitByZeroes.length; i++) {
    if (splitByZeroes[i].length >= 13) {
        count++
    }
}

console.log(`we have ${count} array positions to check in more detail`)

// but wait! there's more!
//even if the substring is e.g. 14 long, we only need to do 2 checks: index ranges 0-12 and 1-13
// the amount of calculations needed is therefore length - 13 + 1

const thirteenArray = []
for (let i = 0; i < splitByZeroes.length; i++) {
    if (splitByZeroes[i].length >= 13) {
        for (let j = 0; j + 12 <= splitByZeroes[i].length; j++) {
        // now for Frankenstein's monster, we slice a string of 13 characters out of the original array
        // we split it into a temporary array
        // we sort that one (this will do it ascending)
        // we reverse the sorting
        // we join the temporary array back together into a string 
        // and push it to the thirteenArray
        thirteenArray.push(splitByZeroes[i].slice(j,j+13).split("").sort().reverse().join(""))
        }
        count += splitByZeroes[i].length - 13 + 1
    }
}

console.log(`we have ${count} calculations to do compared to close to 1000 in the beginning:`, 1000 - 13 + 1)

// now we sort the thirteenArray and reverse that
const thirteenArraySorted = thirteenArray.sort().reverse()

// biggest multiplication has to be index 0
largestProduct = (() => thirteenArraySorted[0].split("").forEach(val => largestProduct *= parseInt(val)))

largestProduct = (() => {
    let largestProduct = 1
    for (let i = 0; i < thirteenArraySorted[0].split("").length; i++) {
        console.log(thirteenArraySorted[0].split("")[i])
        largestProduct *= parseInt(thirteenArraySorted[0].split("")[i])
    }
    return largestProduct
})
console.log(largestProduct())

// let text = "992444292823"
// const textarr = text.split("").sort().reverse()
// console.log(textarr.join())
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

// largestProduct = ((number) => {
//     const arr = String(number).split("")
//     for (let i = 0; i < arr.length - 11; i++) {
//         const miniArr = arr.slice(i, i+12)

//         // if there's a 0 at the position it renders the entire area (-12 and +12) around it void for multiplication!!!

//         let sumArr = 0
//         sumArr = ((arr) => arr.forEach(val => console.log(parseInt(val))))
//         console.log(sumArr(miniArr))
        
//     }
// })

// largestProduct(number)
