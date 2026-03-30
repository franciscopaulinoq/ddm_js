const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(n => n % 2 === 0);
const odds = numbers.filter(n => Math.abs(n % 2) === 1)

console.log(`Pares: ${evens}`);
console.log(`Impares: ${odds}`);
