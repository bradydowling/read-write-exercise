function countPairs(n, socksArray) {
  const socksHashMap = {};
  let totalPairsNum = 0;
  socksArray.forEach((sockColor) => {
    if (!socksHashMap[sockColor]) {
      socksHashMap[sockColor] = 1;
      return;
    }
    totalPairsNum++;
    delete socksHashMap[sockColor];
  });
  return totalPairsNum;
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(countPairs(n, ar));