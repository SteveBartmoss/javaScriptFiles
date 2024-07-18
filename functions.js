

//expresion como una funcion 

let sayHi = function(){
    alert("hola");
}

function sayHiFunc(){
    alert('Hola')
}

alert(sayHiFunc) // esto no ejecuta la funcion pues faltal los parentesis

let varFunction=sayHiFunc

varFunction() //esto tambien puede invocar la funcion ya que se previamente se paso la referencia a una funcion


//paso de una funcion como paramaetro que se ejecuta dependiendo de la accion 
function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}

function showOk(){
    alert("Estas de acuerdo")
}

function showCancel(){
    alert("Cancelaste la ejecucion")
}

ask("Estas de acuerdo?",showOk, showCancel)

//funcion mediante callbaks 

function ask(question, yes,no){
    if(confirm(question)) yes()
    else no()
}

ask("Estade acuerdo?", function(){alert("Estas de acuerdo")}, function(){alert("Cancelaste la ejecucion")})
