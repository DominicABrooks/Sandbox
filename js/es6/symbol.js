// ES6 primative type

const sym = Symbol('test');
console.log(sym) // expected: Symbol(test)

// Use-cases: 
// 1: unique property key
const name = Symbol('name');
const age = Symbol('age');
const address = Symbol('address');

const person = {
  [name]: 'John Doe',
  [age]: 30,
  [address]: '123 Main St'
};

console.log(person[name]); // Output: John Doe
console.log(person[age]); // Output: 30
console.log(person[address]); // Output: 123 Main St
// The benefit of using Symbols as property keys is that they are 
// unique and cannot be accidentally overwritten or accessed using regular property access syntax (person.name, person.age, etc.). 
// To access the values associated with these Symbols, use the square bracket notation (person[name], person[age], person[address]).

// 2: constants representing a concept
// basically just an enum
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            console.error("Invalid")
    }
}
// Every time you call Symbol('Red'), 
// a new symbol is created. Therefore, COLOR_RED can never be mistaken for another value. 
// That would be different if it were the string 'Red'.
console.log(getComplement(COLOR_RED))

// converting to string needs to be done explicitly
const sym_convert = Symbol('desc');
const str2 = String(sym_convert); // 'Symbol(desc)'
const str3 = sym_convert.toString(); // 'Symbol(desc)'
console.log(str2, str3)