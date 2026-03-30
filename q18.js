const secretNum = Math.floor(Math.random() * 50) + 1;

const guesses = [10, 30, 20, 25, 23]
let attempts = 0;

console.log(`Número secreto: ${secretNum}`);

for (const guess of guesses) {
    attempts++;

    if (guess > secretNum) {
        console.log(`${guess} - O numero e menor!`);
    } else if (guess < secretNum) {
        console.log(`${guess} - O numero e maior!`);
    } else {
        console.log(`${guess} - Acertou em ${attempts} tentativa(s)!`);
        break;
    }
}