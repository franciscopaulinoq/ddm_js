const input = "15 + 4";
const items = input.split(" ");
const n1 = Number(items.at(0));
const op = items.at(1);
const n2 = Number(items.at(2));

let result;

switch (op) {
    case "+": result = n1 + n2; break;
    case "-": result = n1 - n2; break;
    case "*": result = n1 * n2; break;
    case "/": result = n1 / n2; break;
    default: result = "Operador inválido";
}

console.log(`${input} = ${result}`);