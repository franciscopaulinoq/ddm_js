const n = 5;

const factorial = (n) => {
    let result = 1;
    if (n !== 0) {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
    }

    return result;
}

console.log(`${n}! = ${factorial(n)}`);
