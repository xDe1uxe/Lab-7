function sumOfFirstFivePrimes() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    let primes = [];
    let number = 1;

    while (primes.length < 5) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }

    const sum = primes.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(sumOfFirstFivePrimes()); 
