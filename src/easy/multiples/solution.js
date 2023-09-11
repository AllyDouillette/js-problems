multiples = ((number, length) => {
    let finalArray = []
    for (let i = 1; i <= length; i++) {
        finalArray.push(number * i)
    }
    return finalArray
})