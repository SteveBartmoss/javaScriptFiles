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