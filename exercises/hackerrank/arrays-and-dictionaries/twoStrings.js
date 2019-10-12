// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  const string1Map = {};
  for (let i = 0; i < s1.length; i++) {
    const s1Letter = s1[i];
    string1Map[s1Letter] = true;
  }
  for (let i = 0; i < s2.length; i++) {
    const s2Letter = s2[i];
    if (string1Map[s2Letter]) {
      return 'YES';
    }
  }
  return 'NO';
}

const input0 = ['hello', 'world']; // YES
const input1 = ['hi', 'world']; // NO
console.log(twoStrings(input0[0], input0[1]));
console.log(twoStrings(input1[0], input1[1]));