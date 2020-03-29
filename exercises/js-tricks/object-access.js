const benjaminButton = {
    age: 25,
    family: { son: 'Benadict Button' },
    'favorite-songs': ['We are young', 'Young love', 'We aint never gettin older'],
    '5yearPlan': 'Get younger'
};

const age = benjaminButton.age; // 25
const son = benjaminButton.family.son;
const graddaughter = benjaminButton?.family?.daughter?.graddaughter; // undefined

const faveSongs = benjaminButton['favorite-songs'];
const myKey = '5yearPlan';
const myValue = benjaminButton[myKey]; // 'Get younger'

const { [myKey]: myNewValue, family: oldFamily, age } = benjaminButton;
console.log(myNewValue); // 'Get younger'
console.log(oldFamily); // { son: 'Benadict Button' }
console.log(age); // 25