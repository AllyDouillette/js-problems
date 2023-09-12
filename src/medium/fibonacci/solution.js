fibonacci = (() => {
    let fibonacci = [1, 1]
    for (let i = 2; i < 100; i++) {
        fibonacci.push(fibonacci[fibonacci.length-1]+ fibonacci[fibonacci.length-2])
    }
    return fibonacci
})