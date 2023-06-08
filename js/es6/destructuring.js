//  Object destructuring

const name = 'Dominic'
const userAge = 27
const user = {
    name, /* name = name */
    age: userAge,
    location: 'Chicago'
}

const { name: first, age } = user;
//console.log(first, age);

// const product = {
//     label: 'Notebook',
//     price: 3,
//     stock: 203,
//     salePrice: undefined
// }

// const label = product.label;
// const stock = product.stock;

// const {price, label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(price + "\n" + stock+ "\n" + rating)

// const transaction = (type, {label, stock}) => {
//     //const {} = myProduct ||| could destructure here
// }
// transaction('order'. product)

// Array destructuring
const iterable = ['a', 'b', 'c'];
const [a, y] = iterable;
    // a = 'a'; y = 'b'
console.log(a, y)

const arr = ['a', 'b'];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}