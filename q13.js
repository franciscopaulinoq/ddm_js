const n = 10;

let sum = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
    i % 2 === 0 ? evenCount++ : oddCount++;
}

console.log(`Soma de 1 a ${n}: ${sum}`);
console.log(`Pares: ${evenCount} | Ímpares: ${oddCount}`);