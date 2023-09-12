result = (() => {
    let result = []
    for (let i = 1; i <= 12; i++) {
        // this is the row loop!
        //make an empty box
        result.push([])
        console.log(result.length, i)
        // now fill ith with the values
        for (let j = 1; j <= 12; j++) {
            console.log(j)
            result[i-1].push(i * j)
        }
    }
    return result
})
