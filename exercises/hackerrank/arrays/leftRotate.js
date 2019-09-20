function rotLeft(arr, rotations) {
  const rotatedArray = arr.concat();
  for (let i = 0; i < rotations; i++) {
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}

const numRotation = 4;
const sampleArray = [1, 2, 3, 4, 5];

const expectedOutput = [5, 1, 2, 3, 4];

console.log(rotLeft(sampleArray, numRotation));
console.log(expectedOutput);