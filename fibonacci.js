
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        let swap = a;
        a = b;
        b = swap + b;
    }
}

const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}


function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Ejemplo de uso de la función generadora
const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}
