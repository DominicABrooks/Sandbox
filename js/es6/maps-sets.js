// Maps
const map = new Map(); // create an empty Map
const KEY = {};

map.set(KEY, 123);
console.log(map.get(KEY)); // Output: 123
console.log(map.has(KEY)); // Output: true
map.delete(KEY);
console.log(map.has(KEY)); // Output: false

const mapWithInitialData = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

console.log(mapWithInitialData.get(2)); // Output: 'two'

// Sets
const arr = [5, 1, 5, 7, 7, 5];
const unique = [...new Set(arr)];
console.log(unique); // Output: [5, 1, 7]

// WeakMaps
const _objToListeners = new WeakMap();

function addListener(obj, listener) {
  if (!_objToListeners.has(obj)) {
    _objToListeners.set(obj, new Set());
  }
  _objToListeners.get(obj).add(listener);
}

function triggerListeners(obj) {
  const listeners = _objToListeners.get(obj);
  if (listeners) {
    for (const listener of listeners) {
      listener();
    }
  }
}

const obj = {};
addListener(obj, () => console.log('hello'));
addListener(obj, () => console.log('world'));

triggerListeners(obj);
// Output:
// hello
// world
