let maior;
let menor;
let soma = 0;

const numbers = [1, 2, 3];

for (const number of numbers) {
  menor = menor || number;
  maior = maior || number;
  if (menor > number) menor = number;
  if (maior < number) maior = number;
  soma += number;
}

console.log(`Soma: ${soma} | ` + `Media: ${soma/numbers.length}`);
console.log(`Maior: ${maior} | ` + ` Menor: ${menor}`);
