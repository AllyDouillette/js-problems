ThreeOrFive = ((maxNum) => {
    let output = 1
    for (let i = 1; i <= maxNum; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            output += i
        }
    }
    return output
})

console.log(ThreeOrFive(1000))