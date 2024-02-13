//let vs var vs const

//no usar var porque es viejo
let nombre='Steve'; //usar let cuando se que el valor puede cambiar
const apellido='Wozniak'; //usar const cuando el valor no cambia

console.log(nombre,apellido);

if(true){
    let nombre='Peter'; //aqui encuentra el scope de la variable
    console.log(nombre); //esta varieable solo existe dentro del if
}

console.log(nombre);

//template literales

const firstName='Peter';
const lastName='Parker';


const fullName=`${firstName} ${lastName}`; //asi se puede usar un template string

console.log(fullName);

//obejto literal

const persona={ //asi se declara un objeto
    apodo: 'Steve',
    alias: 'Wozniak',
    edad: 24,
    direction: {
        ciudad: 'New York',
        postal: 4654
    }
}

const persona2 = {...persona}; //con esto se crea un nuevo objeto, ya que asi se rompe la referencia al objeto persona
persona2.alias='Alan'

console.log(persona);
console.log(persona2);

//arelgos 

const lista=[1,2,3,4,5]; //asi se declara un arreglo

lista.push(6); //asi se puede agregar un elemento a un arreglo

const lista2=[...lista]; //asi se puede clonar un arreglo usando el operador spread

lista2.push(7);

const lista3=lista2.map(num=>num*2); //con esto duplicacmos los elementos y ademas creamos un nuevo arreglo

console.log(lista);
console.log(lista2);
console.log(lista3);


//funciones 

function saludar(nombre){
    return `Hola ${nombre}` //asi se imprime un valor recibido por una funcion
}

const hello =function(){ //asi se declara una funcion de manera mas segura
    return 'Esta forma es segura';
}

const flecha=()=>{ //asi se declara una fucnion flecha
    return 'Esta es una funcion flecha';
}

const getData=()=>{
    return {
        id: 1,
        alias: 'Spiderman'
    }
}

const existe = lista.some(num=> num === 4); //de esta forma se puede usar una funcion flecha de manera util

console.log(saludar(nombre));
console.log(hello());
console.log(flecha());
console.log(getData());
console.log(existe);


//destructuracion de objetos

const person={
    name:'Steve',
    age: 24,
    codeName: 'Spiderman'
}

const {name,age,codeName,power='Ninguno'} = person; //asi se destrucctura un objeto

console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

const createHero = ({name,age,codeName,power='Ninguno'})=>{ //se puede destruccturar el objeto que recibe la funcion
    return {
        id: 117,
        name: name, // si la propieda tiene el mismop nombre que el parametro destructurado se puede omitir el pamaretro
        age,
        codeName,
        power
    }
}

console.log(createHero(person));

//destructuracion de arreglos

const characters = ['Gojo','Itadori','Nobara'];

const [primero,segundo,tercero,cuarto='empty'] = characters; //para destruccturar un arreglo se tiene que usar [] en lugar de {}

console.log(primero,segundo,tercero);

