// function asyncFunc() {
//     return new Promise(
//         function (resolve, reject) {
//             ···
//             resolve(result);
//             ···
//             reject(error);
//         });
// }


// asyncFunc()
// .then(result => { ··· })
// .catch(error => { ··· });


/////////////////////////////////////////////////////////////////

asyncFunc1()
.then(result1 => {
    // Use result1
    return asyncFunction2(); // (A)
})
.then(result2 => { // (B)
    // Use result2
})
.catch(error => {
    // Handle errors of asyncFunc1() and asyncFunc2()
});

////////////////////////////////////////////////////////////////

// sequential
asyncFunc1()
.then(() => asyncFunc2());

// fork
asyncFunc1();
asyncFunc2();

// join
Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
.then(([result1, result2]) => {
    ···
})
.catch(err => {
    // Receives first rejection among the Promises
    ···
});

////////////////////////////////////////////////////////////////

