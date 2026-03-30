const convertArraySet = (array) => {
    return [...new Set(array)];
}

const convertArrayInclude = (array) => {
    const resultArray = [];
    for (const element of array) {
        if (!resultArray.includes(element))
            resultArray.push(element);
    } 
    return resultArray;
}

const inputArray = [1, 3, 5, 3, 7, 1, 9, 5];

console.log(`Original: [${inputArray.join(", ")}]`);
console.log(`Sem duplicatas (Set): [${convertArraySet(inputArray).join(", ")}]`);
console.log(`Sem duplicatas (includes): [${convertArrayInclude(inputArray).join(", ")}]`);