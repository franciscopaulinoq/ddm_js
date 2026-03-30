const n = -7;

if (n === 0) {
    console.log("Zero");
} else {
    const parity = (n % 2 === 0) ? "par" : "impar";
    const sign = (n > 0) ? "positivo" : "negativo";

    console.log(`${n} e ${parity} e ${sign}`);
}