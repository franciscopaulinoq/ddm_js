function potencia(base, expoente) {
    if (expoente === 0) return 1;
    return base * potencia(base, expoente - 1);
}

console.log(`potencia(2, 10) -> ${potencia(2, 10)}`);
console.log(`potencia(3, 4) -> ${potencia(3, 4)}`);
console.log(`potencia(5, 0) -> ${potencia(5, 0)}`);