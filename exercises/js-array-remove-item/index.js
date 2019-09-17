const myArray = [10, 2, 4, 15, 20];
console.log('myArray (unchanged):', myArray);

const removalItem = 4;
const removalIndex = myArray.indexOf(removalItem);
console.log('removal index:', removalIndex);

const myArray1 = [...myArray];

delete myArray1[removalIndex];
console.log('myArray1 (after delete):', myArray1);

const myArray2 = [...myArray];
myArray2.splice(removalIndex, 1);
console.log('myArray2 (after splice):', myArray2);

const newArray = myArray.filter((item) => {
  return item !== removalItem;
});

console.log('newArray (from filter):', newArray);