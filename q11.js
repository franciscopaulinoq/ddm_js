const numericGrade = 85

const getGrade = (value) => {
    if (value < 0 || value > 100) return "Erro: Nota inválida";

    if (value < 60) return "F";
    if (value < 70) return "D";
    if (value < 80) return "C";
    if (value < 90) return "B";
    return "A";
}

console.log(`Nota ${numericGrade} = Conceito ${getGrade(numericGrade)}`)