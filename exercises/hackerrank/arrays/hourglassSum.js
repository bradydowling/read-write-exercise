function hourglassSum(arr) {
  let maxHourGlassSum = -63;
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const thisHourGlassSum = getHourGlassSum({ x, y }, arr);
      if (maxHourGlassSum < thisHourGlassSum) {
        maxHourGlassSum = thisHourGlassSum;
      }
    }
  }
  return maxHourGlassSum;
}

function getHourGlassSum({ x, y }, arr) {
  const topLeft = arr[x][y];
  const topMid = arr[x][y + 1];
  const topRight = arr[x][y + 2];
  const mid = arr[x + 1][y + 1];
  const botLeft = arr[x + 2][y];
  const botMid = arr[x + 2][y + 1];
  const botRight = arr[x + 2][y + 2];
  return topLeft + topMid + topRight + mid + botLeft + botMid + botRight;
}

const input1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const input2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(input2));