// default parms like any other language
const print = (msg = "default") => {
    console.log(msg)
}

// print()
// expected: "default"

// more examples
function func(x, y=0) {
    return [x, y];
}
func(1, 2); // [1, 2]
func(1); // [1, 0]
func(); // [undefined, 0]

// Rest parameters (...)
function format(pattern, ...params) {
    return {pattern, params};
}
format(1, 2, 3);
    // { pattern: 1, params: [ 2, 3 ] }
format();
    // { pattern: undefined, params: [] }

// Named parameters with destructuring
function selectEntries({ start=0, end=-1, step=1 } = {}) { // (A)
    // The object pattern is an abbreviation of:
    // { start: start=0, end: end=-1, step: step=1 }

    // Use the variables `start`, `end` and `step` here
    // console.log(`start:  ${start}`)
    // console.log(`end:    ${end}`)
    // console.log(`step:   ${step}\n`)
}

// Partial or full pass
selectEntries({ start: 10, end: 30, step: 2 });
    // start:  10
    // end:    30
    // step:   2
selectEntries({ step: 3 });
    // start:  0
    // end:    -1
    // step:   3

// Calls default
selectEntries({});
selectEntries();
    // start:  0
    // end:    -1
    // step:   1

// Spread operator for converting iterables into arguments
Math.max(-1, 5, 11, 3)
Math.max(...[-1, 5, 11, 3])
Math.max(-1, ...[-5, 11], 3)

// In Array literals, the spread operator turns iterable values into Array elements:
let arr = [1, ...[2,3], 4]
console.log(arr)
arr = [1, 2, 3, 4]
console.log(arr)

