// Sticky flag (/y)
const regex = /a/y; // Match 'a' at the beginning of the string

console.log(regex.test('abc')); // Output: true
console.log(regex.test('abc')); // Output: false (match is not at the beginning)

// Unicode flag (/u)
const emojiRegex = /\uD83D\uDE80/u; // Match a specific emoji (rocket)

console.log(emojiRegex.test('🚀')); // Output: true

// Unicode code point escape in regular expression
const emojiRegex2 = /\u{1F680}/u; // Match any rocket emoji

console.log(emojiRegex2.test('🚀')); // Output: true

// Accessing flags property
const pattern = /abc/gi;
console.log(pattern.flags); // Output: 'gi'
