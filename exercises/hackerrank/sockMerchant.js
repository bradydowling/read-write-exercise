const n = 9

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  const socksByType = ar.reduce((accumulator, item) => {
    if (!accumulator[item]) {
      accumulator[item] = 0;
    }
    accumulator[item] = accumulator[item] + 1;
    return accumulator;
  }, {});

  const totalPairs = Object.keys(socksByType).reduce((total, sockType) => {
    const totalForType = socksByType[sockType];
    return total + Math.floor(totalForType / 2);
  }, 0);

  return totalPairs;
}

sockMerchant(n, ar);