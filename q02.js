const calculateImc = (height, weight) => weight / (height**2);  

const height = 1.80;
const weight = 75;
console.log(`Seu IMC e: ${calculateImc(height, weight).toFixed(2)}`);