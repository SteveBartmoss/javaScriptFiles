
//asi se declaran variables en js 

let tiempo=10;
let altura=1.80;
let nombre="Steve";

// asi se pueden imprimr multiples variables
console.log('tiempo',tiempo,'altura',altura,'nombre',nombre);

//metodos de strings
let texto="there something inside you its hard to explain";

//acceder a la longitud de un string
console.log('propedad length',texto.length);

//formas de acceder a un caracter de una cadena

console.log('Por .at', texto.at(10));
console.log('Por .charAt', texto.charAt(8));
console.log('Por .chartCodeAt', texto.charCodeAt(7));
console.log('Por su indice [i]', texto[0]);

//formas de dividir un string 

let midleSlice=texto.slice(0,10);
let midleSubString=texto.substring(10,20);

console.log('Con slice', midleSlice);
console.log('Con subString', midleSubString);