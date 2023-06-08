// max stack, avail in es5 actually
let hex = 0xFF

// binary!
// really like using _ for better readability
let bin = 0b11
bin = 0b1111_1111

// owner - rw
// group - r
// others - r
let oct = 0o644 // file perm example :) 
// console.log(hex, bin, oct)

// represents the difference between 1 and the smallest floating point number greater than 1.
// console.log(Number.EPSILON)

// .IsInt is num without fraction
let isNum = Number.isInteger
// console.log(isNum(hex))
// console.log(isNum(0.1))

// safety
// checks if within the signed 53 bit range in which there is no loss of precision
Number.isSafeInteger(1)
Number.isSafeInteger(Number.MAX_SAFE_INTEGER)
// min-max safe
Number.MAX_SAFE_INTEGER
// 9007199254740991
Number.MIN_SAFE_INTEGER
// -9007199254740991
// console.log(Number.MIN_SAFE_INTEGER)

// Number.isNaN(num) checks whether num is the value NaN. 
// In contrast to the global function isNaN(), 
// it doesn’t coerce its argument to a number and is therefore safer for non-numbers
const normal_isNan = isNaN('???')
const number_isNan = Number.isNaN('???')
// console.log(normal_isNan, number_isNan)

Number.isFinite // checks if number is not infinite of -infinite or nan value
Number.parseFloat // str to num
Number.parseInt // str to int

// ES6 Math methods!
Math.sign // returns sign of passed num
Math.trunc // removes decimal fraction of number 3.2 -> 3, so on
Math.log10 // Computers log to base 10
// Input: Math.log10(100) 
// Expected: 2

Math.hypot // Actually just takes a, b, and computes the hypot using pythag


