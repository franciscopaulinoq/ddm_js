const converterMoeda = (valor, taxaCambio) => {
    return valor / taxaCambio;
}

const initValue = 100;

console.log(`$${converterMoeda(initValue, 5.20).toFixed(2)}`);
console.log(`€${converterMoeda(initValue, 5.60).toFixed(2)}`);
