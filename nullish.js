
//funcionamiento basico de una evaluacion nullish
result = (a !=null && a !== undefined) ? a : b;

let user

alert(user ?? "Anonymous")

let name="John"

alert(name ?? "Anonymus")


let firstName = null
let lastName = null
let nickName = null

alert(firstName ?? lastName ?? nickName ?? "Anonymus")

alert(firstName || lastName || nickName || "Anonymus") //misma forma pero con el operador || 

