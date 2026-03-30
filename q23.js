const validaSenha = (senha) => {
  const erros = []
  if (senha.length < 8) erros.push("Minimo 8 caracteres");
  if (!/[0-9]/.test(senha)) erros.push("Precisa de numero");
  if (!/[A-Z]/.test(senha)) erros.push("Precisa de maiuscula");
  return {
    "valida": (erros.length === 0 ? true : false), 
    "erros": erros
  };
}

console.log(validaSenha("testeGg1"));