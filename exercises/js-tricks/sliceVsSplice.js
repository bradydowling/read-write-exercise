const myArray = ['first', 'second', 'third', 'fourth'];

const newArray = myArray.slice(1, 3);

console.log(newArray); // [ 'second', 'third' ]

console.log(myArray); // [ 'first', 'second', 'third', 'fourth' ]

myArray.splice(1, 2);

console.log(myArray); // [ 'first', 'fourth' ]