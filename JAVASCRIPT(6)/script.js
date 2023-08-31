 //usul 1
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

Promise.all([promise1, promise2]).then((value)=>{                            
    let sum = value.reduce((a,b)=>{
        return a+b;})
    console.log(sum);})

//usul2
function promiseX() {
    return new Promise(resolve => {setTimeout(() => resolve(5), 1000);});
}

function promiseY() {
    return new Promise(resolve => {setTimeout(() => resolve(3), 2000);});
}

function asyncSum() {
    return new Promise(resolve => {
        const xPromise = promiseX();
        const yPromise = promiseY();
        Promise.all([xPromise, yPromise]).then(([x, y]) => {
            resolve(x + y);
        });
    })
}


asyncSum().then(sum => {
    console.log(sum);
});