const isValidPrime = (num) => {
    if (n < 2) return false;
    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const n = 20;
const primes = [];

for (let i = 2; i <= n; i++) {
    if (isValidPrime(i)) primes.push(i);
}

console.log(`Primos até ${n}: ${primes.join(", ")}`);