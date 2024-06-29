function sumOfSeries(n) {
    let sum = 0;
    let currentNumber = 0;

    for (let i = 1; i <= n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }

    return sum;
}

console.log(sumOfSeries(5)); 
