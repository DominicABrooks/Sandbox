// Object prop shorthand

const name = 'Dominic'
const userAge = 27
const user = {
    name, /* name = name */
    age: userAge,
    location: 'Chicago'
}

console.log(user)

// object descructuring 

const product = {
    label: 'Notebook',
    price: 3,
    stock: 203,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

// const {price, label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(price + "\n" + stock+ "\n" + rating)

const transaction = (type, {label, stock}) => {
    //const {} = myProduct ||| could destructure here
}

transaction('order'. product)