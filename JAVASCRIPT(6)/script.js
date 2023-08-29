// let promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
// let promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

// Promise.all([promise1, promise2]).then((values) => {
//      function Promise(promise1,promise2) {
//      return promise1 + promise2 ;}
//     console.log(values);    
// })

function promise1() {
    return new Promise(resolve => {setTimeout(() => resolve(5), 1000);});
}

function promise2() {
    return new Promise(resolve => {setTimeout(() => resolve(3), 2000);});
}

function asyncSum() {
    return new Promise(resolve => {
        const xPromise = promise1();
        const yPromise = promise2();
        Promise.all([xPromise, yPromise]).then(([x, y]) => {
            resolve(x + y);
        });
    })
}


asyncSum().then(sum => {
    console.log(sum);
});