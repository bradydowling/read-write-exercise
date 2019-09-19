function jumpingOnClouds(clouds) {
  let jumpCount = 0;

  for (let i = 0; i < clouds.length - 1; i++) {
    jumpCount++;
    let doubleJumpIndex = i + 2;
    let isDoubleJumpInBounds = doubleJumpIndex <= clouds.length - 1;
    let isDoubleJumpSafe = clouds[doubleJumpIndex] === 0;
    if (isDoubleJumpInBounds && isDoubleJumpSafe) {
      i++;
      continue;
    }
  }

  return jumpCount;
}

const input1 = [0, 0, 1, 0, 0, 1, 0];
const expectedOutput1 = 4;
console.log(jumpingOnClouds(input1));
console.log(`Test 1 passes: ${jumpingOnClouds(input1) === expectedOutput1}`);

const input2 = [0, 0, 0, 0, 1, 0];
const expectedOutput2 = 3;
console.log(jumpingOnClouds(input2));
console.log(`Test 2 passes: ${jumpingOnClouds(input2) === expectedOutput2}`);