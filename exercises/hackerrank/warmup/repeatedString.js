function repeatedString(str, n) {
  const remainder = n % str.length;
  const dividend = Math.floor(n / str.length);
  const baseCount = str.split("").reduce((count, char) => {
    const thing = char === 'a' ? 1 : 0;
    return count += thing;
  }, 0);
  const remainderCount = str.substr(0, remainder).split("").reduce((count, char) => {
    const thing = char === 'a' ? 1 : 0;
    return count += thing;
  }, 0);
  const numA = baseCount * dividend + remainderCount;
  return numA;
}

const input1 = ['aba', 10];
console.log(repeatedString(input1[0], input1[1]));

const input2 = ['a', 1000000000000];
console.log(repeatedString(input2[0], input2[1]));