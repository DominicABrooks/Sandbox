// ITERATABLES: 
// Arrays
// Strings
// Maps
// Sets
// DOM data structures

const iterable = ['a', 'b'];
for (const x of iterable) {
    console.log(x);
}

// Output:
// a
// b

// break and continue both work
for (const x of ['a', '', 'b']) {
    if (x.length === 0) break;
    console.log(x);
}

// loop with index 
const arr = ['a', 'b'];
for (const [index, element] of arr.entries()) {
    console.log(`${index}. ${element}`);
}

// loop over with key, val
const map = new Map([
    [false, 'no'],
    [true, 'yes'],
]);
for (const [key, value] of map) {
    console.log(`${key} => ${value}`);
}
