function countValleys(stepsNum, path) {
  const pathArray = path.split("");
  let valleyCount = 0;
  let previousLevel = 0;
  let currentLevel = 0;
  pathArray.forEach((step) => {
    previousLevel = currentLevel;
    if (step === 'U') {
      currentLevel++;
    }
    else if (step === 'D') {
      currentLevel--;
    }
    if (currentLevel < 0 && previousLevel >= 0) {
      valleyCount++;
    }
  });
  return valleyCount;
}

const n = 8;
const s = 'UDDDUDUU';
console.log(countValleys(n, s));