// ES5 - Real (non-method) function
function regularFunction() {
    console.log("This is a regular function.");
}

// ES5 - Method
var objectES5 = {
    method: function() {
        console.log("This is a method in ES5.");
    }
};

// ES5 - Constructor
function ConstructorES5() {
    console.log("This is a constructor function in ES5.");
}

// ES6 - Real (non-method) function - Arrow function
const arrowFunction = () => {
    console.log("This is an arrow function.");
};

// ES6 - Method
class MyClass {
    method() {
        console.log("This is a method in ES6.");
    }

    *generatorMethod() {
        yield "This is a generator method.";
    }
}

// ES6 - Constructor
class ConstructorES6 {
constructor() {
    console.log("This is a constructor in ES6.");
}
}

// Testing the functions and objects
regularFunction(); // Output: This is a regular function.

objectES5.method(); // Output: This is a method in ES5.

var instanceES5 = new ConstructorES5(); // Output: This is a constructor function in ES5.

arrowFunction(); // Output: This is an arrow function.

var myInstance = new MyClass(); // Output: This is a constructor in ES5.
var instanceES6 = new ConstructorES6(); // Output: This is a constructor in ES6.
myInstance.method(); // Output: This is a method in ES6.
var generator = myInstance.generatorMethod();
console.log(generator.next().value); // Output: This is a generator method.