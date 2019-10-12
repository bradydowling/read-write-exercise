function isBalanced(s) {
  const isLeft = (char) => {
    return '[{('.indexOf(char) > -1;
  }
  const opposites = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  const matchesStack = [];
  for (let i = 0; i < s.length; i++) {
    if (isLeft(s[i])) {
      matchesStack.push(opposites[s[i]]);
      continue;
    }
    if (matchesStack.length < 1) {
      return 'NO';
    }
    const right = matchesStack.pop();
    if (right !== s[i]) {
      return 'NO';
    }
  }
  if (matchesStack.length > 0) {
    return 'NO';
  }
  return 'YES';
}

const sampleInput0 = '{[()]}';
const sampleInput1 = '{[(])}';
const sampleInput2 = '{{[[(())]]}}';

console.log(isBalanced(sampleInput0)); // YES
console.log(isBalanced(sampleInput1)); // NO
console.log(isBalanced(sampleInput2)); // YES