const saudacao = (nome, idioma = "pt") => {
  traducoes = {"pt": "Olá", "en": "Hello", "es": "Hola"}
  console.log(`${traducoes[idioma] || traducoes["pt"]}, ${nome}!`);
}

saudacao("Maria");
saudacao("John", "en");
saudacao("Carlos", "es");
