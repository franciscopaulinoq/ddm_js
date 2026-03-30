let a = 1;
let b = 3;

console.log(`Antes: a = ${a}, b = ${b}`);

[a, b] = [b, a];

console.log(`Depois: a = ${a}, b = ${b}`);