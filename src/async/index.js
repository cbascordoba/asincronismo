const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Do something async'),3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Antes del async 1');
doSomething();
console.log('Despues1');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error)
    }
}

console.log('Antes del async2');
anotherFunction();
console.log('Despues2');