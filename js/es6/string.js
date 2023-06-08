// New es6 string methods

// funcs made with new methods!
let startsWith = (s, start) => { 
    return s.startsWith(start);
}

let endsWith = (s, end) => { 
    return s.endsWith(end);
}

console.log(startsWith('hello', 'hell')); // expected, true!
console.log(startsWith('hello', 'helG')); // expected, false

console.log(endsWith('hello', 'ello')); // expected, true!
console.log(endsWith('hello', 'Gello')); // expected, false

console.log('hello'.includes('el')); // expected, true!
console.log('hello'.includes('GGG'));// expected, false

// template literals
const varName = 'a var like this'
`basically
you just need to format it with \` and if you want 
to use any
type of variables just use ${varName}! 
`