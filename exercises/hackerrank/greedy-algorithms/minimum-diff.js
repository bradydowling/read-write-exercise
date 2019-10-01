// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  const sortedArray = arr.sort();
  let minimumAbsoluteDifference = Math.abs(sortedArray[0] - sortedArray[1]);
  for (let i = 1; i < sortedArray.length - 1; i++) {
    const currentAbsoluteDifference = Math.abs(sortedArray[i] - sortedArray[i + 1]);
    if (currentAbsoluteDifference < minimumAbsoluteDifference) {
      minimumAbsoluteDifference = currentAbsoluteDifference;
    }
  }
  return minimumAbsoluteDifference;
}

const sampleInput0 = [3, -7, 0]; // 3
const sampleInput1 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]; // 1
const sampleInput2 = [1, -3, 71, 68, 17]; // 3
const sampleInput3 = [1, -3]; // 4

console.log(minimumAbsoluteDifference(sampleInput0));
console.log(minimumAbsoluteDifference(sampleInput1));
console.log(minimumAbsoluteDifference(sampleInput2));
console.log(minimumAbsoluteDifference(sampleInput3));