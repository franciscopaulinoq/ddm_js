let prevArray = [64, 34, 25, 12, 22, 11, 90];

console.log("Antes:");
console.log(prevArray);

for (let i = 0; i < prevArray.length; i++) {
    for (let j = i; j < prevArray.length; j++) {
        if (prevArray[i] > prevArray[j]) {
            [prevArray[i], prevArray[j]] = [prevArray[j], prevArray[i]];
        }
    }
}

console.log("Depois:");
console.log(prevArray);