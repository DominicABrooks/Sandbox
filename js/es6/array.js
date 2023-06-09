// New static Array methods

// Creates an array from an array-like object.
// @param arrayLike — An array-like object to convert to an array.
Array.from

// Returns a new array from a set of elements.
// @param items — A set of elements to include in the new array object.
Array.of

const x = Array.of(1, 2, 3)
console.log(x)

// Iteration

// The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
let iterator = x.entries()
// for(const entry of iterator) {
//     console.log(entry)
// }
// [0,1]
// [1,2]
// [2,3]

iterator = x.keys()
// for(const key of iterator) {
//     console.log(key)
// }
// 0
// 1
// 2

iterator = x.values()
// for(const value of iterator) {
//     console.log(value)
// }
// 1
// 2
// 3

// Finding element from proto aswell. 
Array.prototype.find
Array.prototype.findIndex

let found = x.find((element) => element > 1)
console.log(found)
found = x.findIndex((element) => element > 1)
console.log(found)

// typed array 
const typedArray = new Uint8Array([0,1,2]);
console.log(typedArray.length); // 3
typedArray[0] = 5;
const normalArray = [...typedArray]; // [5,1,2]

// The elements are stored in typedArray.buffer.
// Get a different view on the same data:
const dataView = new DataView(typedArray.buffer);
console.log(dataView.getUint8(0)); // 5

// Typed Arrays (Uint8Array, Int16Array, Float32Array, etc.) interpret the ArrayBuffer as an indexed sequence of elements of a single type.
// Instances of DataView let you access data as elements of several types (Uint8, Int16, Float32, etc.), at any byte offset inside an ArrayBuffer.

// File API
// XMLHttpRequest
// Fetch API
// Canvas
// WebSockets
// And more
