const inputArray = [1, 2, 3, 4];

const inverterArray = (inArray) => {
  const resultArray = [];
  for (const item of inArray) {
    resultArray.unshift(item);
  }
  return resultArray;
}

const outputArray = inverterArray(inputArray);

console.log(outputArray);
