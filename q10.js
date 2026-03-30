const sides = "3,4,6";
const [s1, s2, s3] = sides.split(",").map(Number);

const isValid = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);

const getTriangleType = (a, b, c) => {
    if (!isValid(a, b, c)) return "Não forma um triângulo";

    if (a === b && b === c) return "Equilátero";
    if (a !== b && a !== c && b !== c) return "Escaleno";
    return "Isósceles";
};

console.log(`Lados: ${s1}, ${s2}, ${s3} - Resultado: ${getTriangleType(s1, s2, s3)}`);