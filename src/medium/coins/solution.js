coins = ((amount) => {
    // don't hassle me I'll just
    let coins = {
        "amount" : amount,
        "arrOfAvailableCoins": [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    }
    //ok now the routine
    let remainingAmount = amount
    for (let i = 0; i < coins.arrOfAvailableCoins.length; i++) {
        //we're looping through the array
        // we want to set the key of the coins object to the calculated number but ONLY if it's relevant, aka bigger than 0
        if (Math.floor(remainingAmount / coins.arrOfAvailableCoins[i]) !== 0) {
            coins[coins.arrOfAvailableCoins[i].toString()] = Math.floor(remainingAmount / coins.arrOfAvailableCoins[i])
            remainingAmount -= Math.floor(remainingAmount / coins.arrOfAvailableCoins[i]) * coins.arrOfAvailableCoins[i]
            // silly javascript messes around so we force remainingAmount to be rounded to 2 decimals
            remainingAmount = Math.round(remainingAmount * 100) / 100
        }
    }
    return coins
})