const verificarIdade = (nome, idade) => `${nome} tem ${idade} ano(s) e e ${idade > 18 ? "maior": "menor"} de idade`;

console.log(verificarIdade("Ana", 22));
console.log(verificarIdade("Pedro", 15));
console.log(verificarIdade("Maria", 45));