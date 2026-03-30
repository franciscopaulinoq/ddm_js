const calculateImc = (height, weight) => weight / (height**2);  

const height = 1.80;
const weight = 75;
const result = calculateImc(height, weight);

const getClassification = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

console.log(`IMC ${result.toFixed(2)} - Classificacao: ${getClassification(result)}`);